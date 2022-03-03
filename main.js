


//                                                   CLEAR COMMAND
client.on("message", message =>{
    if (message.content.startsWith("!")) {
        message.channel.bulkDelete(1)
    };
    if(message.content.startsWith("!clear")){
        if(message.member.hasPermission('MANAGE_MESSAGES')){           
            let args = message.content.trim().split(/ +/g);
            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <=99){
                    message.channel.bulkDelete(args[1])                
                }
                else{
                    message.channel.send('[ERROR] Le nombre de maximun de message pouvant être suprrimer es de 99 !')
                }
            }
            else{
                message.channel.send('[ERROR] Indiquer le nombre de messages que vous voulez supprimer !')
            }
        }
        else{
            message.channel.send('[WARNING] Vous ne pouvez pas utiliser cette commande !')
        }
    };
});
//CLEAR COMMAND END
