const Discord = require('discord.js')
const Message = Discord.Message

//Function
function help(message, args) {
    message.channel.send("Hi. I'm Dizz Bot.\n" 
        + "Available commands: \n"
        + " - help: Show this message.\n"
        + " - say: Say something.\n"
        + " - cube: Get luck from \"Linh vật\" - d!cube help for help")
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
    } else if (args == "help") {
        message.channel.send("d!cube {equipment type} with equipment type in [wse, accessories, gloves, others].\nFor example: d!cube gloves")
        return
    } else {
        message.channel.send("Incorrect equipment type. Please input \"wse,\" \"accessories,\" \"gloves,\" or \"others\"")
        return
    }

    // args = args || ["Tier up", "18%", "21%", "23%", "24%", "27%", "30%", "33%", "36%", "39%", "Éo độ"]
    message.channel.send("<@325278460438380554> said: " + arr[Math.floor(Math.random() * arr.length)])
}

function say(message, args) {
    const content = args.join(' ')
    if (content.indexOf("dm") !== -1 || content.indexOf("dit me") !== -1) {
        // message.channel.send("Dizz <>")

    } else {
        message.channel.send(content)
    }

    message.delete()
}

// Main function that implement all other functions
function processCommand(message) {
    // let args = message.content.substring(2).split(" ")
    let fullCommand = message.content.substr(2) // Remove Prefix
    let splitCommand = fullCommand.split(" ") // Split message with space
    let primaryCommand = splitCommand[0] // The first word is the command
    let args = splitCommand.slice(1)

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + args)
    console.log("Received request from: " + message.author.username + " with command: " + primaryCommand + " and args: " + args.join(" "))

    // let cmd = args.splice(0, 1)[0].toLowerCase();
    switch (primaryCommand) {
        case "help":
            help(message, args)
            break
        case "cube":
            cube(message, args)
            break
        case "say":
            say(message, args)
            break
        case "lunch":
            truanayangi(message, args)
            break
        case "racist":
            antiChat(message)
            break
        default:
            // unknownCommand(message, [cmd].concat(args)) 
            message.channel.send("Unknown command. Use d!help for more information.")
    }
}

// Function in consider
let antiTable = {}

function dizz(message, args) {
    if (!message || message.author.id === "325278460438380554") return
    
    if (args.length == 0) {
        args = null
    }

    args = args || [
        "Dizz <@325278460438380554>",
        "Dizz <@325278460438380554> 3000",
        "Dizz <@325278460438380554> lấy linh"
    ]
    message.channel.send(args[Math.floor(Math.random() * args.length)])
    message.delete() 
}

function antiChat(message) {
    if (!message) return

    if (message.author.id === "224258714037780480") {
        let name = message.author.username
        // let antiEntry = antiTable[message.author.username] || 0 // Original code
        let antiEntry = Math.floor(Math.random() * 3)
        message.channel.send(makeAntiMessage(message.member, antiEntry))
        // antiEntry = (antiEntry + 1) % 3                         // Original code
        // antiTable[message.author.username] = antiEntry          // Original code
    }
}

function makeAntiMessage(author, index) {
    let antiMessage = [
        "**Địt con mẹ nhà mày đấy thằng " + author + " **",
        "**Láo lồn với bố mày à thằng ml " + author + " **",
        "**Câm, cút thằng ml " + author +  " kia, bố bắn chết cha mày giờ**"
    ]

    index = index || 0
    return antiMessage[index]
}

function truanayangi(message, args) {
    if (args.length == 0) {
        args = null
    }
    args = args || ["Cơm gà", "Phở cuốn", "Bún", "Cơm sườn"]
    message.channel.send(args[Math.floor(Math.random() * args.length)])
}


module.exports = processCommand