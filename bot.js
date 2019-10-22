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
        let arr = message.content.split(" ")
        let arrSend = []
        if (arr.length == 1) {
            tagReturn(message)
        } else if (message.content.toLowerCase().includes("dizz")) {
            arrSend = ["Hơi láo rồi đấy nhé ", "Nhân chi sơ, tính cà khịa à? ", "Dizz lại "]
        } else if (message.content.toLowerCase().includes("đm") || message.content.toLowerCase().includes("dm")) {
            arrSend = ["Chửi bậy ít thôi, nghiệp quật đấy ", "Ngon nhào dzô, anh em đổ tí máu "]
        } else if (message.content.toLowerCase().includes("dmm") || message.content.toLowerCase().includes("đmm")) {
            arrSend = ["Cà khịa 1 tí thì vui, cà khịa nhiều quá ăn dùi cui vào mồm đấy ", "Nhỏ cà chớn, lớn lên đi cà khịa à? "]
        } else if (message.content.toLowerCase().includes("láo")) {
            arrSend = ["Cuộc sống giống như điệu nhảy Tango, tao lùi 1 bước thì mày chỉ được tiến 1 bước thôi, đừng có mà nhờn "]
        } else if (message.content.toLowerCase().includes("?")) {
            arrSend = ["Toàn hỏi thừa thôi", "Mày nói xem lý do gì tao phải trả lời câu hỏi của mày? "]
        }
        message.channel.send(message.author.toString() + arrSend[Math.floor(Math.random() * arrSend.length)])
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