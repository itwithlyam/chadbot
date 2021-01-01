const Discord = require('discord.js')


module.exports = {
    name: 'dice',
    description: 'flips a dice',
    cooldown: 5,
    execute(message) {
        function doRandHT() {
            var rand = ['1','2', '3', '4', '5', '6'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
             const embed = {
            "title": `Your Dice Number:`,
            "description": doRandHT(),
            "color": "FF6700",
            };
            message.channel.send({ embed });
    }
  }