const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    
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
        processCommand(message)
    }
})

//Function
function help(message, args) {
    message.channel.send("Help command called")
}

function cube(message, args) {
    if (args.length == 0 || args == null) {
        message.channel.send("Input equipment type (others: hat/top/bottom/.....)")
        return
    } else {
        args = args.toString().toLowerCase()
    }

    let arr = null
    if (args == "wse") {
        arr = ["Éo độ", "Tier up", "Đập mãi éo lên", "39%", "33%", "23%", "%IED", "%Boss Damage"]
    } else if (args == "accessories") {
        arr = ["Éo độ", "Tier up", "Đập mãi éo lên", "Meso obtained", "Item drop rate", "30%"]
    } else if (args == "gloves") {
        arr = ["Éo độ", "Tier up", "Đập mãi éo lên", "16% crit damage", "8% crit damage", "Decent Sharp Eyes + 2 line crit damage"]
    } else if (args == "others") {
        arr = ["Éo độ", "Tier up", "Đập mãi éo lên", "39%", "33%", "30%", "27%", "24%", "23%", "Éo ra gì"]
    } else {
        message.channel.send("Incorrect equipment type. Please input \"wse,\" \"accessories,\" \"gloves,\" or \"others\"")
        return
    }

    // args = args || ["Tier up", "18%", "21%", "23%", "24%", "27%", "30%", "33%", "36%", "39%", "Éo độ"]
    message.channel.send("<@224258714037780480> said: " + arr[Math.floor(Math.random() * arr.length)])
}

function processCommand(message) {
    // let args = message.content.substring(2).split(" ")
    let fullCommand = message.content.substr(2) // Remove Prefix
    let splitCommand = fullCommand.split(" ") // Split message with space
    let primaryCommand = splitCommand[0] // The first word is the command
    let args = splitCommand.slice(1)

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + args)

    // let cmd = args.splice(0, 1)[0].toLowerCase();
    switch (primaryCommand) {
        case "help":
            help(message, args)
            break
        case "cube":
            cube(message, args)
            break
        default:
            // unknownCommand(message, [cmd].concat(args)) 
            message.channel.send("Unknown command. Use d!help for more information.")
    }
}

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

bot_token = "NjMxMzQ2OTgwMjU3Mzk4ODA3.XZ1jCQ.NAQ-LELUmzpkMo03_ZnIIv0FDOs"

client.login(bot_token)