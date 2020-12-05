module.exports = {
    name: 'warn',
    description: 'Warns a user',
    usage: '<user>',
    guildOnly: true,
    args: true,
    execute(message, args) {
        message.mentions.members.first().send('You have been warned.')
        message.reply('warned them.')
    },
}