require('dotenv').config();
const { Telegraf } = require('telegraf');

// Проверяем наличие токена бота
if (!process.env.BOT_TOKEN) {
  console.error('❌ BOT_TOKEN не найден в переменных окружения!');
  console.log('📝 Создайте файл .env и добавьте BOT_TOKEN=ваш_токен_бота');
  process.exit(1);
}

const WEB_APP_URL = process.env.WEB_APP_URL;
// Создаем экземпляр бота
const bot = new Telegraf(process.env.BOT_TOKEN);

// Память для контроля частоты показа клавиатуры (чтобы не спамить)
const lastKeyboardShown = new Map(); // key: chatId, value: timestamp

// Вспомогательная функция: инлайн‑кнопка запуска веб‑приложения (Inline Keyboard), без постоянного меню
const getWebAppKeyboard = () => ({
  inline_keyboard: [
    [
      {
        text: '🚀 Запустить обучающую платформу',
        web_app: { url: WEB_APP_URL },
      },
    ],
  ],
});

// Нужно ли показать клавиатуру сейчас (не чаще, чем раз в 10 минут)
const shouldShowKeyboard = (chatId) => {
  const last = lastKeyboardShown.get(chatId) || 0;
  return Date.now() - last > 10 * 60 * 1000;
};

// Безопасно показать клавиатуру повторно (например после очистки диалога)
async function showWebAppKeyboard(ctx) {
  if (!WEB_APP_URL) return;
  const chatId = ctx.chat?.id;
  if (!chatId) return;
  if (!shouldShowKeyboard(chatId)) return;
  await ctx.reply('Нажмите кнопку ниже, чтобы открыть обучающую платформу.', {
    reply_markup: getWebAppKeyboard(),
  });
  lastKeyboardShown.set(chatId, Date.now());
}

// Настраиваем кнопку меню бота (если поддерживается), чтобы сразу открывать WebApp
async function configureBotMenu() {
  if (!WEB_APP_URL) return;
  try {
    await bot.telegram.setChatMenuButton({
      menu_button: {
        type: 'web_app',
        text: 'Запустить обучающую платформу',
        web_app: { url: WEB_APP_URL },
      },
    });
    console.log('✅ Меню бота настроено на WebApp');
  } catch (e) {
    console.warn('⚠️ Не удалось настроить меню бота:', e.message);
  }
}

// Обработчик команды /start: сразу показываем кнопку запуска платформы
bot.start((ctx) => {
  if (!WEB_APP_URL) {
    ctx.reply('❌ URL веб‑приложения не настроен');
    return;
  }
  ctx.reply('Добро пожаловать! Нажмите кнопку ниже, чтобы открыть обучающую платформу.', {
    reply_markup: getWebAppKeyboard(),
  });
  if (ctx.chat?.id) {
    lastKeyboardShown.set(ctx.chat.id, Date.now());
  }
});

// Убираем автопоказ клавиатуры на любое сообщение, чтобы не требовалось второе нажатие

// Запуск бота
console.log('🚀 Запускаем Trae Bot...');

configureBotMenu()
  .finally(() => {
    bot.launch()
      .then(async () => {
        // Минимальный список команд
        try {
          await bot.telegram.setMyCommands([
            { command: 'start', description: 'Запустить обучающую платформу' },
          ]);
        } catch (e) {
          console.warn('⚠️ Не удалось установить команды бота:', e.message);
        }
        console.log('✅ Бот успешно запущен!');
        console.log('📱 Бот готов к запуску обучающей платформы');
      })
      .catch((error) => {
        console.error('❌ Ошибка при запуске бота:', error);
        process.exit(1);
      });
  });

// Graceful shutdown
process.once('SIGINT', () => {
  console.log('\n🛑 Получен сигнал SIGINT, останавливаем бота...');
  bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
  console.log('\n🛑 Получен сигнал SIGTERM, останавливаем бота...');
  bot.stop('SIGTERM');
});