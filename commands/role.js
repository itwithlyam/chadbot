module.exports = {
    name: 'role',
    description: 'Role/Unrole a member',
    args: true,
    guildOnly: true,
    usage: '<user> <role name>',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('you need to have MANAGE_MEMBERS permissions to use this command.')
        let role = message.guild.roles.cache.find(r => r.name === args.slice(1).join());
        let user = message.mentions.members.first()
        if (!user.roles.cache.some(role => role.name === args.slice(1).join())) {
        user.roles.add(role).catch(console.error);
        message.reply('role added');
        } else {
            user.roles.remove(role).catch(console.error);
            message.reply('role removed');
        }
    },
}