module.exports = {
    name: 'nuke',
    description: 'Deletes a channel then re-adds it.',
    guildOnly: true,
    execute(message) {
        message.guild.channels.cache.get(message.channel.id).delete()
        message.guild.channels.create(message.channel.name, 'text')
        message.author.send("Nuked channel.");
    },
}