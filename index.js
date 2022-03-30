const Discord = require("discord.js");
const config = require("./config.json");
const prefix = '!';

const helptext = `\`\`\`실시간예약봇 | 맛집 예약을 위한 실시간 인스타 크롤러 1.0.0-alpha

[명령어 목록]
!ping - pong
!help - 도움말 보기

[주시중인 맛집 목록]
스시심타카이 (@sushi_sim)

[소스코드 보기]
https://github.com/gilteunchoi/foodbot\`\`\``

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    client.user.setActivity("1.0.0-alpha"); 
    console.log("1.0.0-alpha")
});

client.on('messageCreate', (message) => {
    if (message.content === prefix + 'ping'){
        message.reply({
            content: 'pong',
        })
    }
    if (message.content === prefix + 'help'){
        message.reply({
            content: helptext,
        })
    }
});

client.login(config.BOT_TOKEN);