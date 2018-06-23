const Discord = require('discord.js');
const client = new Discord.Client();
var sleep = require('sleep');

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    sleep.sleep(2000)
    msg.channel.send(msg.content);
  }
});

client.login(process.env.token);
