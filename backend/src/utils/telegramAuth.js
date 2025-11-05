const crypto = require('crypto');

function validateTelegramInitData(initData, botToken) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return false;

    const pairs = [];
    for (const [key, value] of params.entries()) {
      if (key === 'hash') continue;
      pairs.push(`${key}=${value}`);
    }
    pairs.sort();
    const dataCheckString = pairs.join('\n');

    const secret = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const computedHash = crypto.createHmac('sha256', secret).update(dataCheckString).digest('hex');
    return computedHash === hash;
  } catch (e) {
    return false;
  }
}

module.exports = { validateTelegramInitData };