const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', ()=>{
    console.log('Connected as ' + client.user.tag);

    client.user.setActivity('YouTube', {type: 'WATCHING'})

    client.guilds.forEach(guild => {
        console.log(guild.name);
    });
})

client.login('NzU2NTExMDIwODk3MjcxODY5.X2S5yg.BaDFtcZfY4qkN2msuYwVsatbAxE')