module.exports = {
    name: 'kick',
    description: 'Kick a user',
    guildOnly: true,
    args: true,
    usage: '<user>',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you need to have KICK_MEMBERS permissions to use this command.')
        const member = message.mentions.members.first();
        member.kick();
        message.reply(`kicked ${member}. If it doesn't work, then please check the bot's permissions.`);
    },
}