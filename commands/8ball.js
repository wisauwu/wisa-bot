const Discord = require('discord.js')

module.exports = {
    name: "8b",
    description: "8ball command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('please ask a full question. . .')
        let replies = ["yes.", "Outlook seems good.", "yus", "of course.", "Yes – definitely.", "no.", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "only for today!", "not for today c:", "sadly yes..", "sadly no..", "maybe!", "ask again.. later.."];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("RANDOM")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballembed)
    }
}