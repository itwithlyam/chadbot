module.exports = {
    name: 'nuke',
    description: 'Deletes a channel then re-adds it.',
    guildOnly: true,
    execute(message) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you need to have MANAGE_CHANNELS permissions to use this command.')
        message.guild.channels.cache.get(message.channel.id).delete()
        message.guild.channels.create(message.channel.name, 'text')
        message.author.send("Nuked channel.");
    },
}