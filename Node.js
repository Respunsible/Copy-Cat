const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    setTimeout(msg.channel.send(msg.content), 3000);
  }
});

client.login(process.env.token);
