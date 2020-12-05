module.exports = {
    name: 'kick',
    description: 'Kick a user',
    guildOnly: true,
    args: true,
    usage: '<user>',
    execute(message, args) {
        const member = message.mentions.members.first();
        member.kick();
        message.reply(`kicked ${member}. If it doesn't work, then please check the bot's permissions.`);
    },
}