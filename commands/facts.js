const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('P4422U-T397TXR8W9');

module.exports = {
	name: 'fact',
	description: 'Get a fact from the Wolfram API',
	args: true,
	usage: '<question>',
	execute(message, args) {
		const question = args.join(' ')
		waApi.getShort(question)
			.then(answer => {message.channel.send(answer)} )
			.catch(message.channel.send);
		message.channel.send('If you get no answer, then consider rephrasing the question.')
	}
}