module.exports = {
    name: 'unban',
    description: 'unbans a member',
    usage: '<id>',
    guildOnly: true,
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you need to have BAN_MEMBERS permissions to use this command.')
        message.guild.members.unban(args[0])
        message.reply(`unbanned ${args[0]}`);
    },
}