const Discord = require("discord.js");
const bot = new Discord.Client({
    disableEveryone: true
});
bot.commands = new Discord.Collection();
var fs = require('fs')
const auth = require('./scripts.js')

function requireUncached(module) {
    delete require.cache[require.resolve(module)]
    return require(module)
}

info = `This bot currently has only a few features`

bot.on("ready", () => {
    console.log('CBot Online!');
});

bot.on("message", message => {

    var prefix = '/';
    var messageArray = message.content.split(" ");
    var cmd = messageArray[0];
    var args = messageArray.slice(1);

    try {
        if (cmd === `${prefix}info`) {
          return(message.channel.send(info))
        }

        if (cmd === `${prefix}signup`) {
            user = args[0]
            pass = args[1]
            email = args[2]
            id = message.author.id
            console.log(`Attempting signup for: ${user}, ${pass}, ${email}`)
            try {
                if (!fs.existsSync(`./users/${message.author.id}.json`)) {
                    message.channel.send('Succesfully signed up!')
                    return (auth.signUp(user, pass, email, id))
                }
                if (fs.existsSync(`./users/${message.author.id}.json`)) {
                    message.channel.send(`Signup Failed! Error: Username Already Exists.`)
                }
            } catch (err) {
                console.error(err)
            }

        }

    } catch (err) {
        console.log(err)
    }
});

bot.login('NTcxMDQ4OTM3Mjc2OTY0OTE0.XMIFBw.W5sA5A9oM3rYvjP5ZloTuN6hqhg');
