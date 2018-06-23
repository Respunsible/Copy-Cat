const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.token);
