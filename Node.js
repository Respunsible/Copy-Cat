const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.author.id !== '460110841606570005') {
    await new Promise(done => setTimeout(done, 5000));
    msg.channel.send(msg.content);
  }
});

client.login(process.env.token);
