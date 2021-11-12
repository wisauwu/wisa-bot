const db = require(`discord.js`);

exports.run = async (client, message, args, tools) => {
    let member = message.mentions.members.first() || message.member;
    let global = await db.fetch(`globalMessages_${member.id}`);
    let guild = await db.fetch(`globalMessages_${member.guild.id}_${member.id}`);
    message.channel.send(`**Global Messages: \`${global}\`\`${guild}\`**`)

}