const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'announce',
    description: 'Announces a message',
    args: true,
    guildOnly: true,
    usage: '<message>',
    execute(message, args, Discord, client) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('you need to have MANAGE_GUILD permissions to use this command.')
        let messagee = args.join()
        messagee = messagee.replace(/\,/g, " ");
        const embed = new Discord.MessageEmbed()
            .setTitle('New message')
            .setDescription(messagee)
        message.channel.send(embed);
        client.channels.cache.get(message.channel.id).messages.fetch(message.id).then(message => message.delete())
    },
}