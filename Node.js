const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    var interval = setInterval (function () {
      msg.channel.send(msg.content);
    }, 1 * 100); 
  }
});

client.login(process.env.token);
