module.exports = {
    name: 'ticket',
    description: 'Opens a modmail ticket',
    guildOnly: true,
    execute(message) {
        message.reply('opening a ticket.');
        message.guild.channels.create(message.author.id, {
            type: 'text',
            permissionOverwrites: [{
              id: message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL']
            }]
          }).then(channel => {
            channel.updateOverwrite(message.author.id, {
              VIEW_CHANNEL: true
            })
          })
        message.channel.send(`Welcome to #${message.author.id} !`)
          
    },
}