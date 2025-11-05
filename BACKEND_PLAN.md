# План разработки бэкенда (Node.js, SQLite, Prisma, Telegram WebApp)

Этот документ описывает план реализации бэкенда для текущего фронтенда на Next.js (папка `frontend`). Бэкенд пишется на JavaScript/TypeScript поверх Next.js Route Handlers (API в `src/app/api`) с БД SQLite через Prisma и аутентификацией пользователей по Telegram ID (верификация `initData` Telegram WebApp). Также включена админ-панель.

## Цели

- Хранить данные курсов и уроков в SQLite через Prisma.
- Аутентификация пользователей по Telegram WebApp `initData` (Telegram ID).
- Управление доступом: роли `USER` и `ADMIN`.
- Админ-панель для CRUD по курсам/урокам, архивированию уроков, управлению пользователями и правами.
- Интеграция с текущими страницами: курсы/уроки читаются из API.

## Технологии

- `Next.js` (App Router) — API-роуты в `src/app/api`.
- `Prisma` + `SQLite` — ORM и база данных.
- `jsonwebtoken` — выдача JWT по результатам серверной верификации Telegram `initData`.
- `zod` (опционально) — валидация входящих данных.
- `bcrypt` (опционально) — если потребуется локальная аутентификация админа помимо Telegram.

## Структура папок (предложение)

```
frontend/
  src/
    app/
      api/
        auth/
          telegram/
            route.ts        # POST: верификация initData, выдача JWT
        me/
          route.ts          # GET: профиль текущего пользователя
        courses/
          route.ts          # GET: список курсов, POST (admin): создать курс
        courses/[slug]/
          route.ts          # GET: курс по slug, PUT/DELETE (admin)
        courses/[slug]/lessons/
          route.ts          # GET: список уроков курса, POST (admin): создать урок
        lessons/[id]/
          route.ts          # GET: урок, PUT/DELETE (admin)
        lessons/[id]/archive/
          route.ts          # PATCH (admin): архив/разархив
        enroll/[slug]/
          route.ts          # POST: записать пользователя на курс
        progress/lesson/[id]/
          route.ts          # POST: отметить прогресс по уроку
      admin/
        page.tsx            # Уже существует; подключить к API
  prisma/
    schema.prisma
    seed.ts
  .env
```

## Переменные окружения

- `DATABASE_URL="file:./prisma/dev.db"`
- `TELEGRAM_BOT_TOKEN="<ваш_бот_токен>"`
- `JWT_SECRET="<случайная_строка>"`
- `ADMIN_TELEGRAM_ID="<telegram_id_суперадмина>"` (для первоначальной инициализации ролей)

## Миграции и инициализация Prisma

1. Установка зависимостей:
   - `npm i @prisma/client prisma` (в папке `frontend`)
2. Инициализация:
   - `npx prisma init --datasource-provider sqlite`
3. Миграции:
   - `npx prisma migrate dev --name init`
4. Генерация клиента:
   - `npx prisma generate`

## Схема БД (Prisma)

```prisma
// prisma/schema.prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  USER
  ADMIN
}

model User {
  id           String   @id @default(cuid())
  telegramId   String   @unique
  username     String?  
  firstName    String?  
  lastName     String?  
  avatarUrl    String?  
  role         Role     @default(USER)
  createdAt    DateTime @default(now())
  enrollments  Enrollment[]
  progresses   LessonProgress[]
}

model Course {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  description String
  isPublished Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  lessons     Lesson[]
  enrollments Enrollment[]
}

model Lesson {
  id          String   @id @default(cuid())
  courseId    String
  course      Course   @relation(fields: [courseId], references: [id])
  order       Int
  title       String
  description String
  contentUrl  String?  // ссылка на видео/материалы
  isArchived  Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Enrollment {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id])
  createdAt DateTime @default(now())
}

model LessonProgress {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  lessonId  String
  lesson    Lesson   @relation(fields: [lessonId], references: [id])
  status    String   // e.g. "COMPLETED" | "IN_PROGRESS"
  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())
}
```

## Верификация Telegram WebApp `initData`

Telegram WebApp присылает в фронтенд объект `window.Telegram.WebApp.initDataUnsafe`, а в запрос на сервер отправляем `initData` (строку). На сервере проверяем подпись согласно документации TG:

```js
// utils/telegramAuth.js
import crypto from 'crypto';

export function validateTelegramInitData(initData, botToken) {
  // Парсим initData: это URLSearchParams-строка
  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash) return false;

  // Формируем data_check_string: сортированный список пар key=value, исключая hash
  const _pairs = [];
  for (const [key, value] of params.entries()) {
    if (key === 'hash') continue;
    _pairs.push(`${key}=${value}`);
  }
  _pairs.sort();
  const dataCheckString = _pairs.join('\n');

  // Секрет: HMAC-SHA256("WebAppData", botToken)
  const secret = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  const computedHash = crypto
    .createHmac('sha256', secret)
    .update(dataCheckString)
    .digest('hex');

  return computedHash === hash;
}
```

## Поток аутентификации

1. Фронтенд получает `initData` из `window.Telegram.WebApp.initData` и отправляет на `POST /api/auth/telegram`.
2. Сервер валидирует `initData` по алгоритму выше, достаёт `user.id` из `initDataUnsafe.user`.
3. Если пользователя нет в БД — создаётся запись (`role=USER`). Если ID совпадает с `ADMIN_TELEGRAM_ID` — присваивается `role=ADMIN`.
4. Сервер выдаёт JWT (payload: `{ userId, role }`) и кладёт в `httpOnly` cookie (или возвращает в теле, если требуется).
5. Клиент сохраняет сессию и использует JWT для запросов.

### Пример обработчика `POST /api/auth/telegram`

```ts
// src/app/api/auth/telegram/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateTelegramInitData } from '@/utils/telegramAuth';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { initData } = await req.json();
  const botToken = process.env.TELEGRAM_BOT_TOKEN!;
  const jwtSecret = process.env.JWT_SECRET!;

  const ok = validateTelegramInitData(initData, botToken);
  if (!ok) return NextResponse.json({ error: 'Invalid auth' }, { status: 401 });

  const params = new URLSearchParams(initData);
  const userRaw = params.get('user');
  const userObj = userRaw ? JSON.parse(userRaw) : null; // содержит {id, username, first_name, last_name, photo_url}
  if (!userObj?.id) return NextResponse.json({ error: 'No user' }, { status: 400 });

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

  const res = NextResponse.json({ ok: true });
  res.cookies.set('auth_token', token, { httpOnly: true, sameSite: 'lax', path: '/' });
  return res;
}
```

## Авторизация и защита API

- Middleware-утилита: декод JWT из `cookie`/`Authorization` заголовка, подтягивает пользователя.
- Проверка ролей на admin-роутах.

```ts
// utils/authMiddleware.ts
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export function getAuth(req: NextRequest) {
  const jwtSecret = process.env.JWT_SECRET!;
  const token = req.cookies.get('auth_token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return null;
  try {
    return jwt.verify(token, jwtSecret);
  } catch {
    return null;
  }
}

export function requireAdmin(payload: any) {
  return payload?.role === 'ADMIN';
}
```

## API эндпоинты

- `POST /api/auth/telegram` — аутентификация по Telegram WebApp `initData`, выдача JWT.
- `GET /api/me` — текущий пользователь.
- `GET /api/courses` — список курсов (только опубликованные для USER).
- `POST /api/courses` (admin) — создать курс.
- `GET /api/courses/[slug]` — информация о курсе.
- `PUT /api/courses/[slug]` (admin) — обновить курс.
- `DELETE /api/courses/[slug]` (admin) — удалить курс.
- `GET /api/courses/[slug]/lessons` — список уроков (фильтр по `isArchived`).
- `POST /api/courses/[slug]/lessons` (admin) — создать урок.
- `GET /api/lessons/[id]` — получить урок.
- `PUT /api/lessons/[id]` (admin) — обновить урок.
- `DELETE /api/lessons/[id]` (admin) — удалить урок.
- `PATCH /api/lessons/[id]/archive` (admin) — архив/разархив.
- `POST /api/enroll/[slug]` — записать пользователя на курс.
- `POST /api/progress/lesson/[id]` — отметить прогресс.
- (опционально) `POST /api/webhook/telegram` — если нужен обработчик апдейтов для бота.

## Админ-панель

- Доступ только для `role=ADMIN`.
- Разделы:
  - Курсы: список, создание, редактирование, публикация/скрытие.
  - Уроки: в рамках курса — список, редактирование, архив/разархив, порядок (`order`).
  - Пользователи: список, назначение роли `ADMIN` (с осторожностью).
  - Просмотры/Прогресс: метрики (опционально).
- UI уже есть (`src/app/admin/page.tsx`) — подключить к API, добавить защищённый доступ.

## Интеграция фронтенда с API

- На страницах курсов вместо локального `courseData` — запросы к `/api/courses/[slug]` и `/api/courses/[slug]/lessons`.
- Архив/разархив уроков — `PATCH /api/lessons/[id]/archive`.
- Сохранение прогресса — `POST /api/progress/lesson/[id]`.
- На старте WebApp — `POST /api/auth/telegram` с `initData` и установка cookie.

## Пошаговый план задач

1. Настроить Prisma и SQLite:
   - Создать `prisma/schema.prisma` (модели выше), выполнить `migrate dev` и `generate`.
   - Добавить `seed.ts` для начальных данных (минимум один курс и уроки).
2. Реализовать серверную верификацию Telegram WebApp:
   - Утилита `validateTelegramInitData`.
   - Эндпоинт `POST /api/auth/telegram` с выдачей JWT в cookie.
3. Реализовать middleware-утилиты для авторизации:
   - `getAuth`, `requireAdmin`, общая проверка на приватных эндпоинтах.
4. Реализовать эндпоинты курсов и уроков (READ):
   - `GET /api/courses`, `GET /api/courses/[slug]`, `GET /api/courses/[slug]/lessons`, `GET /api/lessons/[id]`.
5. Реализовать эндпоинты для админки (WRITE):
   - `POST/PUT/DELETE` для курсов и уроков, `PATCH archive`.
6. Запись на курс и прогресс:
   - `POST /api/enroll/[slug]`, `POST /api/progress/lesson/[id]`.
7. Интеграция фронтенда:
   - Подключить страницы курсов к API, заменить статический контент на данные из БД.
   - Добавить вызовы архивации/разархивации.
8. Защита админ-панели:
   - Проверка роли `ADMIN` на клиенте (условный рендер) и на сервере (API защита).
9. Тестирование:
   - Юнит-тесты утилиты верификации Telegram.
   - Интеграционные тесты API.
10. Деплой (локально/в Vercel):
   - В Vercel лучше использовать Postgres; для локалки/стартового окружения — SQLite.

## Скрипты в package.json (рекомендации)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "prisma:migrate": "prisma migrate dev",
    "prisma:generate": "prisma generate",
    "prisma:seed": "node prisma/seed.js"
  }
}
```

## Seed пример (упрощённо)

```js
// prisma/seed.js (или .ts)
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.upsert({
    where: { slug: 'barber-from-scratch' },
    update: {},
    create: {
      slug: 'barber-from-scratch',
      title: 'Барбер с нуля',
      description: 'Базовый интенсив для старта',
      lessons: {
        create: [
          { order: 1, title: 'Работа с машинкой', description: 'Основы', contentUrl: null },
          { order: 2, title: 'Fade', description: 'Техника перехода', contentUrl: null }
        ]
      }
    }
  });

  console.log('Seed done:', course.slug);
}

main().finally(() => prisma.$disconnect());
```

## Безопасность и замечания

- Всегда валидация входящих данных (например, `zod`).
- JWT только `httpOnly` cookie; `sameSite=lax`; в продакшене `secure=true`.
- Роуты админки защищены на сервере; клиентская проверка только для UX.
- Логи и аудит (опционально) — запись действий админа.
- Для долгоживущего продакшена лучше перейти с SQLite на Postgres/MySQL.

---

Данный план охватывает полный цикл: БД, аутентификация по Telegram ID, API для курсов/уроков, админ-панель и интеграцию с текущим фронтендом. Приступать к реализации рекомендуется с настройки Prisma/SQLite и аутентификации Telegram, затем — CRUD для курсов/уроков и подключение админ-панели.