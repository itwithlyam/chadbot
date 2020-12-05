module.exports = {
    name: 'dm',
    description: 'Send a DM to a member',
    usage: '<user> <content>',
    args: true,
    guildOnly: true,
    execute(message, args) {
        const user = message.mentions.members.first()
        const content = args.slice(1).join();
        content.replace(/,/g," ");
        user.send(content);
    },
}