const { MessageEmbed } = require("discord.js")
let database = require("croxydb")
let ayarlar = "g!"
module.exports = {
    name: 'abone-yetkilisi',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let a = new MessageEmbed()
        .setDescription("Bu komutu kullanabilmek için **Yönetici* yetkisine sahip olman gerekir!")
        .setTitle("x: Başarısız!")
        .setColor("RED")
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [a]})
  
  let rol = message.mentions.roles.first()
  const aq =  new MessageEmbed()
  .setDescription("Bir rol etiketlemen gerekmekte!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!rol) return message.channel.send({embeds: [aq]})
  
  const ok =  new MessageEmbed()
  .setDescription(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı!`)
  .setColor("RED")
  .setTitle(":white_check_mark: Başarılı!")
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send({embeds: [ok]}
   
  )
}
}
