const Discord = require('discord.js');
const delay = require('delay');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    await delay(2000);
    msg.channel.send(msg.content);
  }
});

client.login(process.env.token);
