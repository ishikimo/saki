const Discord = require('discord.js');
const client = new Discord.Client();

/*
fs.readdir('./events/', (err, files) => { //this is to check for events AKA ready, guildMemberAdd, guildMemberRemove ..etc
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args, sql));
  });
});*///leave commented out until we use events

client.on("message", message => { //this is the command handler -- it checks if there is a command within the commands folder.
  if (message.author.bot) return; //ignores bots
  if (message.channel.type !== 'text' || message.channel.type === 'dm') return; //ignores dms
  if (!message.content.startsWith(config.prefix)){ //checks if prefix
    return;
  }else{//user IS typing a command
  //splits input to commands
    let command = message.content.split(' ')[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(' ').slice(1); //passing through the argument content

    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, Discord);
    } catch (err) {
      console.log(err);
      client.users.get(config.ownerID).send(`${err}`);
      return;
    }
  }
});