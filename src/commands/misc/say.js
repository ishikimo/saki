const { Command } = require('discord.js-commando');

/* registration */

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'misc',
            memberName: 'say',
            description: 'I\'ll say what you tell me to',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                }
            ]
        });
    }

/* the actual command part */

    run(msg, args) {
        const { text } = args;
        msg.delete();
        return msg.say(`\u180E${text}`);
    }
};
