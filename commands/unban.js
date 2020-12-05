module.exports = {
    name: 'unban',
    description: 'unbans a member',
    usage: '<id>',
    guildOnly: true,
    args: true,
    execute(message, args) {
        message.guild.members.unban(args[0])
        message.reply(`unbanned ${args[0]}`);
    },
}