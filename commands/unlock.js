module.exports = {
    name: "unlock",
    description: "Unlocks a channel",
    guildOnly: true,
    execute(message) {
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        message.reply('unlocked the channel.')
    },
}