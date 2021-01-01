module.exports = {
    name: 'purge',
    description: 'Purge (mass delete) messages',
    guildOnly: true,
    args: true,
    usage: '<amount>',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you need to have MANAGE_MESSAGES permissions to use this command.')
        const amount = args[0];

        if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

        if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
        if (amount < 1) return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

        message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
            message.channel.bulkDelete(messages)
            message.reply('purged the messages.');
        });
    }
}