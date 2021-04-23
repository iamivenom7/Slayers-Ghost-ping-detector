const { Client } = require("discord.js");
const bot = new Client();

bot.on("message", (message) => {});

bot.on("messageDelete", (message) => {
  if (message.mentions.users.first()) {
    message.channel.send(
      `A user has been ghost pinged!! ${message.author} has pinged ${
        message.mentions.users.first().username
      }`
    );
  }
});

bot.on("messageUpdate", (message, newMessage) => {
  if (message.mentions.users.first()) {
    if (newMessage.mentions.users.first()) return;
    message.channel.send(
      `A user has been ghost pinged!! ${message.author} has pinged ${
        message.mentions.users.first().username
      }`
    );
  }
});

bot.login("TOKEN");
