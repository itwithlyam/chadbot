module.exports = {
    name: "lock",
    description: 'Locks the channel',
    guildOnly: true,
    execute(message) {
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        })
        message.reply('locked the channel.')

    },
}