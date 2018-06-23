const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  message = string(message.content);
  msg.channel.send(message);
});

client.login(process.env.token);
