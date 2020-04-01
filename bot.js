const Discord = require('discord.js')
const processCmd = require('./commands')
const client = new Discord.Client()
const HTTPHandler = require('./httphandler.js')

var arrEmoId = []

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    // client.user.setActivity("d!help", {type: "WATCHING"})
    // client.user.setActivity("d!help || shuffling dizz array :-w")
    client.user.setActivity("Rap dizz - s!help for more infomation", {type: "LISTENING"})
})

client.on('message', (message) => {
    if (message.author.id == client.user.id) {
        return
    } else {
        processCmd(message)
    }
})

client.on('guildMemberAdd', (member) => {
    if (member.guild.id === "535329428960575508") {
        var role = member.guild.roles.find(role => role.name === "Guest")
        member.addRole(role)
        client.channels.get("629469114301415433").send(member.user.username + " is assign as Guest")
    }
})

var http = require('http')
var server = http.createServer(function (request, response) {
    HTTPHandler.handleRequest(request, response)
})
server.listen(process.env.PORT || 1975, function() {})

var https = require('https')
setInterval(function () {
    https.get('https://dizzbot.herokuapp.com/')
}, 600000)

function tagReturn(message) {
    let args = ["Cái gì?", "?", "<:khinh:535335174427115521>"]

    message.channel.send(args[Math.floor(Math.random() * args.length)])
}

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

client.login(process.env.BOT_TOKEN)