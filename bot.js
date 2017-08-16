const Commando = require('discord.js-commando')

const bot = new Commando.Client({
	owner: '246017713015750656'
})


bot.on('ready', () => {
  bot.user.setGame('Type s!help For Help!')
	console.log('Saki Is online!')
	channel.send('Saki is online! :ok_hand:')
})

bot.registry.registerGroup('random', 'Dice');
bot.registry.registerGroup('misc', 'Misc.');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/src/commands");


bot.login('APPLICATION_TOKEN')
