module.exports = {
    name: "unlock",
    description: "Unlocks a channel",
    guildOnly: true,
    execute(message) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you need to have MANAGE_CHANNELS permissions to use this command.')
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        message.reply('unlocked the channel.')
    },
}