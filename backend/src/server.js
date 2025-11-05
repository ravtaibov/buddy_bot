require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const prisma = require('./db');
const { validateTelegramInitData } = require('./utils/telegramAuth');
const { requireAdmin, requireAuth, getAuthPayload } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Health
app.get('/health', (_, res) => res.json({ ok: true }));

// Auth via Telegram initData
app.post('/auth/telegram', async (req, res) => {
  const { initData } = req.body || {};
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const jwtSecret = process.env.JWT_SECRET;
  if (!initData || !botToken || !jwtSecret) return res.status(400).json({ error: 'Bad request' });

  const ok = validateTelegramInitData(initData, botToken);
  if (!ok) return res.status(401).json({ error: 'Invalid auth' });

  const params = new URLSearchParams(initData);
  const userRaw = params.get('user');
  let userObj = null;
  try { userObj = userRaw ? JSON.parse(userRaw) : null; } catch {}
  if (!userObj?.id) return res.status(400).json({ error: 'No user' });

  const telegramId = String(userObj.id);
  let user = await prisma.user.findUnique({ where: { telegramId } });
  if (!user) {
    const role = telegramId === process.env.ADMIN_TELEGRAM_ID ? 'ADMIN' : 'USER';
    user = await prisma.user.create({
      data: {
        telegramId,
        username: userObj.username ?? null,
        firstName: userObj.first_name ?? null,
        lastName: userObj.last_name ?? null,
        avatarUrl: userObj.photo_url ?? null,
        role,
      },
    });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, jwtSecret, { expiresIn: '7d' });
  res.cookie('auth_token', token, { httpOnly: true, sameSite: 'lax', path: '/' });
  return res.json({ ok: true });
});

// Current user
app.get('/me', async (req, res) => {
  const payload = getAuthPayload(req);
  if (!payload) return res.status(401).json({ error: 'Unauthorized' });
  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json({ id: user.id, telegramId: user.telegramId, role: user.role, username: user.username });
});

// Courses list (published)
app.get('/courses', async (req, res) => {
  const courses = await prisma.course.findMany({ where: { isPublished: true }, orderBy: { createdAt: 'desc' } });
  res.json(courses);
});

// Course by slug
app.get('/courses/:slug', async (req, res) => {
  const course = await prisma.course.findUnique({ where: { slug: req.params.slug }, include: { lessons: { orderBy: { order: 'asc' } } } });
  if (!course) return res.status(404).json({ error: 'Not found' });
  res.json(course);
});

// Lessons of course
app.get('/courses/:slug/lessons', async (req, res) => {
  const course = await prisma.course.findUnique({ where: { slug: req.params.slug } });
  if (!course) return res.status(404).json({ error: 'Not found' });
  const showArchived = req.query.archived === 'true';
  const lessons = await prisma.lesson.findMany({ where: { courseId: course.id, isArchived: showArchived ? undefined : false }, orderBy: { order: 'asc' } });
  res.json(lessons);
});

// Admin: create course
app.post('/courses', requireAdmin, async (req, res) => {
  const { slug, title, description, isPublished = true } = req.body;
  if (!slug || !title) return res.status(400).json({ error: 'Missing fields' });
  try {
    const course = await prisma.course.create({ data: { slug, title, description: description || '', isPublished } });
    res.status(201).json(course);
  } catch (e) {
    res.status(400).json({ error: 'Create failed', details: String(e) });
  }
});

// Admin: create lesson
app.post('/courses/:slug/lessons', requireAdmin, async (req, res) => {
  const course = await prisma.course.findUnique({ where: { slug: req.params.slug } });
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const { order, title, description, contentUrl } = req.body;
  if (!order || !title) return res.status(400).json({ error: 'Missing fields' });
  const lesson = await prisma.lesson.create({ data: { courseId: course.id, order, title, description: description || '', contentUrl: contentUrl || null } });
  res.status(201).json(lesson);
});

// Admin: archive/unarchive lesson
app.patch('/lessons/:id/archive', requireAdmin, async (req, res) => {
  const { archive } = req.body;
  const lesson = await prisma.lesson.update({ where: { id: req.params.id }, data: { isArchived: !!archive } });
  res.json(lesson);
});

// Enroll to course
app.post('/enroll/:slug', requireAuth, async (req, res) => {
  const course = await prisma.course.findUnique({ where: { slug: req.params.slug } });
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const userId = req.auth.userId;
  const existing = await prisma.enrollment.findFirst({ where: { userId, courseId: course.id } });
  if (existing) return res.json(existing);
  const enr = await prisma.enrollment.create({ data: { userId, courseId: course.id } });
  res.status(201).json(enr);
});

// Lesson progress
app.post('/progress/lesson/:id', requireAuth, async (req, res) => {
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Missing status' });
  const userId = req.auth.userId;
  const prog = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: undefined }, // composite not declared, do simple unique by id
    update: { status },
    create: { userId, lessonId: req.params.id, status }
  });
  res.json(prog);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});