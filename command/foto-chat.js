const { MessageEmbed } = require('discord.js');

const db = require("croxydb");

module.exports = {
    name: 'foto-chat',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.reply("Bu komutu kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın!")
    let kanal = message.mentions.channels.first();
    let fotochat = await db.fetch(`fotochat${message.guild.id}`)
let as =  new MessageEmbed()                                          
.setTitle(":x: Başarısız!")
.setDescription("Kullanım: g!foto-chat ayarla #kanal \nSıfırlamak İçin: g!foto-chat sıfırla")
.setColor("RED")
.setFooter( "Godzilla")
    if (!args[0]) return message.channel.send({embeds: [as]}
       );

if(args[0] == "ayarla") {
    if (!kanal) return message.channel.send("**Lütfen bir kanalı etiketleyip tekrar dene!**")
    await db.set(`fotochat_${message.guild.id}`, kanal.id)
   let sa = new MessageEmbed()
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`Artık ${kanal} Kanalına Fotoğraf Dışında Birşey Atılırsa Sileceğim. Yönetici İzni Olanlara Karışmayacağım, Söz!`)
    .setColor("GREEN")
    .setFooter("Godzilla")
    message.channel.send({embeds: [sa]})

}

if(args[0] == "sıfırla") {
    await db.delete(`fotochat_${message.guild.id}`)
 let s = new MessageEmbed()
 .setTitle(":white_check_mark: Başarılı!")
 .setDescription(`Fotochat Kanalı Sıfırlandı.`)
 .setColor("GREEN")
 .setFooter("Godzilla")
    message.channel.send({embeds: [s]})
}    

}
}