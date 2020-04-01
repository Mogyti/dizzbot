const Discord = require('discord.js')
const Message = Discord.Message

const client = new Discord.Client()

//Function
function help(message, args) {
    message.channel.send("Hi. I'm Gin's Slave. My prefix is \"s!\" \n" 
        +"For example: s!drop \n"
        + "Available commands: \n"
        + " - help: Show this message.\n"
        + " - cube: Get luck from \"Linh vật\" while cubing.\n"
        + " - sf: Get luck from \"Linh vật\" while starforcing.\n"
        + " - drop: Test your luck before bossing. \n")
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

function sf(message) {
    let args = ["Éo độ", "Boom đồ", "Đập mãi éo 15*", "Boom đồ", "17* ez", "Boom đồ", "22* ez", "Đập mãi éo 20*", "Éo độ", "Lên lên xuống xuống", "Éo độ"]

    message.channel.send("É said: " + args[Math.floor(Math.random() * args.length)])
}

function say(message, args) {
    if (!message.author.id === "224258714037780480") {
        message.channel.send("Tự nói đi, nhờ tôi làm gì")
        return
    } 

    const content = args.join(' ')
    if (content.indexOf("dm") !== -1 || content.indexOf("dit me") !== -1) {
        message.channel.send("Dizz É")
    } else {
        message.channel.send(content)
    }

    message.delete()
}

function drop(message) {
    let args = ["Lênnnn, max droppp", "Đoán xem <:chiu:588005258068885505>", "Thành thật mà nói thì: Không có gì <:hoho:567974873956220928>", 
                    "Xin chúc mừng, bạn đã quay vào ô **Nerf rate**", "Không nói nhiều: Móm",
                    "Chắc nay nó rớt á <:khinh:535335174427115521>", "<:hoho:567974873956220928>", "Nhưng mà tao có trái tim, còn mày KHÔNG có gì <:phecan:537477148873588749>",
                    "Không có gì là không thể, kể cả việc bạn đi boss và k drop cái gì <:aotuong:537477148575924226>", "<:oitroioi:625520877143851041> max drop rate mà không có gì hết trơn",
                    "<:chomp:535347215925903361> <:chomp:535347215925903361> <:chomp:535347215925903361>", "Mơ đi, mơ nữa đi <:aotuong:537477148575924226> <:cuoi:535334346773757952>" ]
    message.channel.send(args[Math.floor(Math.random() * args.length)])
}

// function dtotem(message) {
//     let args = ["+1", "Để mai hết hạn rồi hãy mở <:pepega:636040268893650963>", "Mở làm gì, không ra đâu <:cuoi:535334346773757952>", "Sẵn sàng chưa???....Một, hai, ba: **Đếu có gì** <:phecan:537477148873588749>",
//                 "Móm, móm nữa, móm mãi, móm thâm niên <:pepega:636040268893650963>", "Đời không cấm bạn mơ, nhưng được hay không lại phụ thuộc vào rờ nờ gờ <:pepega:636040268893650963>",
//                 "Cuộc sống không lường trước điều gì <:hoho:567974873956220928>", "Bố thí cho cái copper là may rồi á <:khinh:535335174427115521>",
//                 "Sai stat <:cuoi:535334346773757952>", "Thèm không cho mà không thèm cũng không cho <:khinh:535335174427115521>"]
//     message.channel.send(args[Math.floor(Math.random() * args.length)])
// }

// Main function that implement all other functions
function processCommand(message) {
    // Testing react
    // reactMessage(message)


    // Testing purpose
    if (message.channel.id == "631401465235111937" && process.env.BOT_TEST != "true") {
        return
    } else if (message.channel.id != "631401465235111937" && process.env.BOT_TEST == "true") {
        return
    }

    // let args = message.content.substring(2).split(" ")
    if (message.content.substr(0, 2).toLowerCase() === "s!") {
        let fullCommand = message.content.substr(2) // Remove Prefix
        let splitCommand = fullCommand.split(" ") // Split message with space
        let primaryCommand = splitCommand[0] // The first word is the command
        let args = splitCommand.slice(1)

        if (!splitCommand.length) {
            message.channel.send("Incorrect form of command. s!help for more information.")
            return
        }
    
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
                sf(message)
                break
            case "dizz":
                dizz(message)
                break
            case "drop":
                drop(message)
                break
            case "emo":
                getListEmoji(message)
                break
            case "emoid":
                getEmoId(message, args)
                return
            // case "dtotem":
            //     dtotem(message)
            //     return
            case "assign":
                roleAssign(message, args)
                return
            default:
                // unknownCommand(message, [cmd].concat(args)) 
                message.channel.send("Unknown command. Use s!help for more information.")
        }
    }
    
}

// Function in consider
let antiTable = {}

// function dizz(message) {
//     if (!message || message.author.id === "325278460438380554") return

//     let args = [
//         "Dizz É",
//         "Trời đất dung hoa, vạn vật sinh sôi, dizz É liên hồi, từ từ hút luck",
//         "function getLuck(EsBabie) => return null",
//         "sudo rm -rf /home/guild/members/É",
//         "Sau mà đi khám nhớ né bệnh viện É làm ra, không là thế giới sẽ mất đi 1 nhân tài <:khinh:535335174427115521>" 
//     ]
//     message.channel.send(args[Math.floor(Math.random() * args.length)])
//     message.delete() 
// }

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

function getListEmoji(message) {
    message.guild.emojis.forEach(custEmo => {
        console.log(custEmo.name + " " + custEmo.id)
    })
    message.channel.send("Done importing emojis of current server, check in console log")
    message.delete()
}

function getEmoId(message, args) {
    if (!args.length) {
        message.channel.send("Incorrect argument. Use d!emoid {emo name} to get its id")
        return
    } else if (args.length > 1) {
        message.channel.send("This function is supported 1 argument atm. Multiple arguments look up will be added in the future.")
        return
    }

    message.guild.emojis.forEach(custEmo => {
        if (custEmo.name == args) {
            message.channel.send("The id of " + custEmo.name + " is: " + custEmo.id)
            return
        }
    })
}

function roleAssign(message, args) {
    if (!message) return
    console.log(args[0] + args[1])

    if (args.length == 0) {
        message.channel.send("Assign wut?")
        return
    } else {
        argsNew = args.slice(1)
    }
    var member = message.mentions.members.first()

    if (argsNew.length == 1) {
        var role = message.member.guild.roles.find(role => role.name === argsNew[0])
        member.addRoles(role)
    } else if (argsNew.length > 1) {
        message.channel.send("Cannot process multiple roles at the same time due to the API deprecation.")
        return
    } else if (argsNew.length == 0) {
        message.channel.send("What role for ${member.username}?")
        return
    }
    message.react("👌")
    message.channel.send("Done!!!")

}

module.exports = processCommand