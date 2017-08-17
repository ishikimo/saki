exports.run = (client, message, args, Discord) =>{


let randomNum = (Math.floor(Math.random() * 3) + 1
);

if(randomNum == 1){ //you can put this in a switch if you feeling up to it ;)
    message.reply("maybe");
}else if(randomNum == 2){
    message.reply("no");
}else if(randomNum == 3){
    message.reply("HELL YEAH BOII");
}else{
    return;
}

}
