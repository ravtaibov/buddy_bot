import { NextRequest, NextResponse } from 'next/server';

// Telegram Bot Token
const BOT_TOKEN = process.env.BOT_TOKEN || '8490038938:AAHF-ccgNGNgKJ2aw6aslZHvfMekbfIsQaQ';
const WEB_APP_URL = process.env.WEB_APP_URL || 'https://buddy-bot-silk.vercel.app';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Обработка сообщений от Telegram
    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      // Обработка команды /start
      if (text === '/start') {
        await sendWebAppButton(chatId);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'Webhook is running',
    timestamp: new Date().toISOString(),
    bot_token: BOT_TOKEN ? 'Set' : 'Not set',
    web_app_url: WEB_APP_URL
  });
}

async function sendWebAppButton(chatId: number) {
  const keyboard = {
    inline_keyboard: [[
      {
        text: "🎓 Открыть курсы",
        web_app: { url: WEB_APP_URL }
      }
    ]]
  };

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: "👋 Добро пожаловать в Buddy Bot!\n\n🎯 Здесь вы найдете лучшие курсы для парикмахеров и барберов.\n\n📚 Нажмите кнопку ниже, чтобы открыть каталог курсов:",
      reply_markup: keyboard
    })
  });

  return response.json();
}