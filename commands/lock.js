module.exports = {
    name: "lock",
    description: 'Locks the channel',
    guildOnly: true,
    execute(message) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you need to have MANAGE_CHANNELS permissions to use this command.')
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        })
        message.reply('locked the channel.')

    },
}