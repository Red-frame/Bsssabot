const express = require('express');
   const TelegramBot = require('node-telegram-bot-api');

   const app = express();
   const port = process.env.PORT || 3000;

   // Ganti dengan token bot Anda
   const token = 'YOUR_TELEGRAM_BOT_TOKEN';
   const bot = new TelegramBot(token, { polling: true });

   // Handle /start command
   bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, 'Hello! I am your Telegram bot.');
   });

   // Handle /echo command
   bot.onText(/\/echo (.+)/, (msg, match) => {
     const chatId = msg.chat.id;
     const resp = match[1]; // Pesan yang dikirim oleh pengguna
     bot.sendMessage(chatId, `You said: ${resp}`);
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });

   module.exports = app;
