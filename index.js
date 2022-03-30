const Discord = require("discord.js");
const config = require("./config.json");
const prefix = '!';

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log("Hello!")
});

client.on('messageCreate', (message) => {
    if (message.content === prefix + 'ping'){
        message.reply({
            content: 'pong',
        })
    }
});

client.login(config.BOT_TOKEN);