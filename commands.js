const Discord = require('discord.js')
const Message = Discord.Message

const client = new Discord.Client()

//Function
function help(message, args) {
    message.channel.send("Hi. I'm Dizz Bot.\n" 
        + "Available commands: \n"
        + " - help: Show this message.\n"
        + " - say: Say something.\n"
        + " - cube: Get luck from \"Linh vật\" while cubing.\n"
        + " - sf: Get luck from \"Linh vật\" while starforcing.\n"
        + " - dizz: Dizz É :hoho: \n"
        + " - drop: Test your luck before bossing")
}

function cube(message, args) {
    if (args.length == 0 || args == null) {
        message.channel.send("d!cube {equipment type} with equipment type in [wse, accessories, gloves, others].  (others: hat/top/bottom/.....)" 
                                + "\nFor example: d!cube gloves")
        return
    } else {
        args = args.toString().toLowerCase()
    }

    let arr = null
    if (args == "wse") {
        arr = ["Éo độ", "Tier up", "Éo độ", "Đập mãi éo lên", "Éo độ", "39%", "Éo độ", "33%", "Éo độ", "23%", "Éo độ", "%IED", "Éo độ", "%Boss Damage"]
    } else if (args == "accessories") {
        arr = ["Éo độ", "Tier up", "Éo độ", "Đập mãi éo lên", "Éo độ", "Meso obtained", "Éo độ", "Item drop rate", "Éo độ", "30%"]
    } else if (args == "gloves") {
        arr = ["Éo độ", "Tier up", "Éo độ", "Đập mãi éo lên", "Éo độ", "16% crit damage", "Éo độ", "8% crit damage", "Éo độ", "Decent Sharp Eyes + 2 line crit damage"]
    } else if (args == "others") {
        arr = ["Éo độ", "Tier up", "Éo độ", "Đập mãi éo lên", "Éo độ", "39%", "Éo độ", "33%", "Éo độ", "30%", "Éo độ", "27%", "Éo độ", "24%", "Éo độ", "23%", "Éo ra gì"]
    } else {
        message.channel.send("Incorrect equipment type. Please input \"wse,\" \"accessories,\" \"gloves,\" or \"others\"")
        return
    }

    // args = args || ["Tier up", "18%", "21%", "23%", "24%", "27%", "30%", "33%", "36%", "39%", "Éo độ"]
    message.channel.send("É said: " + arr[Math.floor(Math.random() * arr.length)])
}

function sf(message, args) {
    if (args.length == 0) {
        args = null
    }

    args = args || ["Éo độ", "Boom đồ", "Đập mãi éo 15*", "Boom đồ", "17* ez", "Boom đồ", "22* ez", "Đập mãi éo 20*", "Éo độ", "Lên lên xuống xuống", "Éo độ"]

    message.channel.send("É said: " + args[Math.floor(Math.random() * args.length)])
}

function say(message, args) {
    const content = args.join(' ')
    if (content.indexOf("dm") !== -1 || content.indexOf("dit me") !== -1) {
        message.channel.send("Dizz É")
    } else {
        message.channel.send(content)
    }

    message.delete()
}

function drop(message, args) {
    if (args.length == 0) {
        args = null
    }
    args = args || ["Lênnnn, max droppp", "Đoán xem :chiu:", "Thành thật mà nói thì: Không có gì :hoho:", "Xin chúc mừng, bạn đã quay vào ô **Nerf rate**", "Không nói nhiều: Móm",
                    "Chắc nay nó rớt á :khinh:", ":hoho:", "Nhưng mà tao có trái tim, còn may KHÔNG có gì :phecan:"]
    message.channel.send(args[Math.floor(Math.random() * args.length)])
}

// Main function that implement all other functions
function processCommand(message) {
    // Testing react
    // reactMessage(message)

    // let args = message.content.substring(2).split(" ")
    if (message.content.substr(0, 2) === "d!") {
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
            case "sf":
                sf(message, args)
                break
            case "dizz":
                dizz(message, args)
                break
            case "drop":
                drop(message, args)
                break
            default:
                // unknownCommand(message, [cmd].concat(args)) 
                message.channel.send("Unknown command. Use d!help for more information.")
        }
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
        "Dizz É",
        "Trời đất dung hoa, vạn vật sinh sôi, ngồi dizz É liên hồi, từ từ hút luck"
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
    args = args || ["Cơm gà", "Phở cuốn", "Bún", "Cơm sườn", "Cơm niêu"]
    message.channel.send(args[Math.floor(Math.random() * args.length)])
}

function reactMessage(message) {
    if (message.author.id === "224258714037780480") {
        message.react("👍")
    }

    message.guild.emojis.forEach(emoji => {
        console.log(emoji.id + " " + emoji.name)
        message.react(emoji)
    });
}


module.exports = processCommand