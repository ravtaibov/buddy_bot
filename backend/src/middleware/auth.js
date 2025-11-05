const jwt = require('jsonwebtoken');

function getAuthPayload(req) {
  const secret = process.env.JWT_SECRET;
  const bearer = req.headers.authorization && req.headers.authorization.startsWith('Bearer ')
    ? req.headers.authorization.slice(7)
    : null;
  const token = req.cookies?.auth_token || bearer;
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}

function requireAuth(req, res, next) {
  const payload = getAuthPayload(req);
  if (!payload) return res.status(401).json({ error: 'Unauthorized' });
  req.auth = payload;
  next();
}

function requireAdmin(req, res, next) {
  const payload = getAuthPayload(req);
  if (!payload || payload.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
  req.auth = payload;
  next();
}

module.exports = { getAuthPayload, requireAuth, requireAdmin };