module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#797997')
        .setTitle('Mona Lisa Commands')
        .setDescription('Here is a list of the Mona Lisa commands!')
        .addFields(
            {name: 'ping', value: 'A random command', inline: false},
            {name: 'messages', value: 'Shows how many messages you have sent', inline: false},
            {name: 'clear', value: 'Clears messages', inline: false},
            {name: 'kick', value: 'Kicks a member', inline: false},
            {name: 'ban', value: 'Bans a member', inline: false}
        )
        .setFooter('Hello :3')
        .setTimestamp()
        

        message.channel.send(newEmbed);
    }


}