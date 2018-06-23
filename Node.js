const Discord = require('discord.js');
const sleep = require('sleep');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    sleep.sleep(4);
    msg.channel.send(msg.content);
  }
});

client.login(process.env.token);
