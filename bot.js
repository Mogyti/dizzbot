const Discord = require('discord.js')
const processCmd = require('./commands')
const client = new Discord.Client()
const HTTPHandler = require('./httphandler.js')

var arrEmoId = []

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    // client.user.setActivity("d!help", {type: "WATCHING"})
    client.user.setActivity("d!help || shuffling dizz array :-w")
})

client.on('message', (message) => {
    if (message.author.id == client.user.id || message.author.id === "605053140466794498") {
        return
    } else if (message.content.includes(client.user.toString())) {
        tagReturn(message)
    } else {
        processCmd(message)
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
    let args = ["Tag gì tao?", "?", "Gọi gì bố đấy có bố đây", "<:khinh:535335174427115521>"]

    message.channel.send(args[Math.floor(Math.random() * args.length)])
}

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

client.login(process.env.BOT_TOKEN)