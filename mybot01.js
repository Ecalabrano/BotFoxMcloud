const Discord = require("discord.js");
const client = new Discord.Client();
var cosa = require("./token.js");

client.on("ready", () => {
    /*Lo que se ejecuta de forma inmediata al arrancar el bot*/
    console.log('Ok')
    client.user.setGame('StarFox Zero')
    //console.log(client.channels);
    var hoy = new Date();
    console.log(hoy.getDate());
    console.log(hoy.getMonth() + 1);
    if(hoy.getDate() === 25 && hoy.getMonth()  + 1 === 11)
    {
            var channel = client.channels.get('187971906756935680');
            channel.sendMessage("Happy Birthday <@204045819085586442>");
    }
});

client.on("message", (message) => {
    /**/
    if(message.content.startsWith("Fox->pp")){
            message.channel.send("<@187609181291937792> You're becoming more like your father");
       }
    else{
    var respuesta =Math.floor((Math.random() * 10) + 1);
    if (message.content.startsWith("Fox") && respuesta == 1)
    {
        message.channel.send("TORYAH!!!");
    }
    else if (message.content.startsWith("Fox") && respuesta == 2)
    {
        message.channel.send("Come on!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 3)
    {
        message.channel.send("Mission complete!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 4)
    {
        message.channel.send("blip blip!!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 5)
    {
        message.channel.send("Get out of there, Slippy!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 6)
    {
        message.channel.send("FAYAAAAH !!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 7)
    {
        message.channel.send("UWGAAAHH !!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 8)
    {
        message.channel.send("ATAH !!");
    }
    else if(message.content.startsWith("Fox") && respuesta == 9)
    {
        message.channel.send("pium pium");
    }
    else if(message.content.startsWith("Fox") && respuesta >= 10)
    {
        message.channel.send("20XX");
    }
    }
});

/*La siguiente linea es el login al bot. Se debe usar el token indicado en el perfil del bot*/
client.login(cosa.tokenvalue);