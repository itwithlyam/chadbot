const Discord = require('discord.js')


module.exports = {
    name: '8ball',
    description: '8ball command',
    cooldown: 7,
    execute(message) {
        function doRandHT() {
            var rand = ['Yes','No', 'nope', 'why are you even trying anymore', 'maybe', 'nope just nope', 'YES!'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
             const embed = {
            "title": `${message.author.username} Your anwser: `,
            "description": doRandHT(),
            "color": "FF6700",
            };
            message.channel.send({ embed });
    }
  }