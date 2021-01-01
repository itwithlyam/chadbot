const { evaluate, e, pi } = require('mathjs')

module.exports = {
    name: 'math',
    description: 'Evaluate a maths equation. (1+1 addition, 1-1 subtraction, 1*1 multiplication, 1/1 division)',
    aliases: ['equals'],
    cooldown: 5,
    usage: '<equation>',
    args: true,
    execute(message, args) {
        const equation = args.join(' ')
        const evaluation = evaluate(equation)
        message.channel.send(evaluation)
    }
}