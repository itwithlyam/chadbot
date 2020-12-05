module.exports = {
    name: "ban",
    description: "Ban a user",
    guildOnly: true,
    usage: "<user>",
    args: true,
    execute(message, args) {
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