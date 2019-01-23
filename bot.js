const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();
const prefix = '!';

client.once('ready', ()  => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'cat') {
        const body = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send({
            files: [body.file]
        });
    }

    if (command === 'hiss') {
        message.channel.send({
            files: ['https://i.kym-cdn.com/photos/images/original/001/096/013/02d.jpg']
        });
    }
});

client.login(process.env.BOT_TOKEN);
