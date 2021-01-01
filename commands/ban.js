module.exports = {
    name: "ban",
    description: "Ban a user",
    guildOnly: true,
    usage: "<user>",
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you need to have BAN_MEMBERS permissions to use this command.')
        try {
        const user = message.mentions.users.first();
        message.guild.members.ban(user);
        message.reply(`banned ${user}. If it didn't work, check the bot's permissions.`);
        }
        catch(error) {
            message.reply(`failed to ban user. Check the bot\'s permissions.\nFull error:\n${error}`);
        }
    },
}