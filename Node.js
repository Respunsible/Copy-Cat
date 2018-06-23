$ npm install delay

const Discord = require('discord.js');
const client = new Discord.Client();
const delay = require('delay');

client.on('message', msg => {
  await delay(1000);
  if (msg.author.id !== '460110841606570005') {
    msg.channel.send(msg.content);
  }
});

client.login(process.env.token);
