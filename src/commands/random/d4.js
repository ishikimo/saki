const commando = require('discord.js-commando');

/* registration */

class D4RollCommand extends commando.Command {
    constructor(client) {
        super(client ,{
            name: 'd4',
            group: 'random',
            memberName: 'd4',
            description: 'Rolls a D4'
        });
    }

/* actual command part */

    async run(message, args) {
        var roll = Math.floor(Math.random() * 4) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D4RollCommand;
