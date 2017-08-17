exports.run = (client, message, args, Discord) =>{


	var embed = new Discord.RichEmbed()
    .setTitle("Saki")
    .setDescription("A Convenient List of Saki's Commands.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**s!help**
**s!say** \`\`[sentence]\`\`
**s!8ball** \`\`[yes/no question]\`\`
**s!owo**` ,true)
    .setFooter("©Litochee", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}
