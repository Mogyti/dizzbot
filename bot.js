const Discord = require('discord.js')
const processCmd = require('./commands')
const client = new Discord.Client()
const HTTPHandler = require('./httphandler.js')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    // client.user.setActivity("d!help", {type: "WATCHING"})
})

client.on('message', (message) => {
    if (message.author.id == client.user.id) {
        return
    }
    
    let prefix = message.content.substr(0, 2).toLowerCase()

    // if (message.content.startsWith("d!")) {
    //     processCommand(message)
    // }

    if (prefix == 'd!') {
        // processCmd(message)
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
    https.get('https://dizzbot.herokuapp.com')
}, 600000)

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

// bot_token = "NjMxMzQ2OTgwMjU3Mzk4ODA3.XZ7pWw.BCVrpccAGCGU23JnSrgSSdqnExs"

client.login(process.env.BOT_TOKEN)