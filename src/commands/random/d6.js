const commando = require('discord.js-commando');

/* registration */

class D6RollCommand extends commando.Command {
    constructor(client) {
        super(client ,{
            name: 'd6',
            group: 'random',
            memberName: 'd6',
            description: 'Rolls a D6'
        });
    }

/* actual command part */

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D6RollCommand;
