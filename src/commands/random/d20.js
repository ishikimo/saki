const commando = require('discord.js-commando');

/* registration */

class D20RollCommand extends commando.Command {
    constructor(client) {
        super(client ,{
            name: 'd20',
            group: 'random',
            memberName: 'd20',
            description: 'Rolls a D20'
        });
    }

/* actual command part */

    async run(message, args) {
        var roll = Math.floor(Math.random() * 20) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D20RollCommand;
