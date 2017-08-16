exports.run = (client, message, args, Discord) =>{
  message.channel.send(args.join(" ")); //joins it back together and sends
  message.delete();
}