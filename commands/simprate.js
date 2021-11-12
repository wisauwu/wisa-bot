const Discord = require('discord.js')

module.exports = {
    name: "simprate",
    description: "a simprate command",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const simprateembed = new Discord.MessageEmbed()
        .setTitle(`simp rate`)
        .setDescription(`${member.username} is ` + rng + "% simp")
        .setColor("RANDOM")

        message.channel.send(simprateembed);
    }
}