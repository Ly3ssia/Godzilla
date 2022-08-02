const { MessageEmbed } = require("discord.js")
let database = require("croxydb")
let ayarlar = "g!"
module.exports = {
    name: 'abone-rol',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
const aq = new MessageEmbed()
.setDescription("Bu komutu kullanabilmek için **Yönetici* yetkisine sahip olman gerekir!")
.setTitle("x: Başarısız!")
.setColor("RED")

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [aq]}
  )
  
  
  let rol = message.mentions.roles.first()
  const a = new MessageEmbed()
  .setDescription("Bir rol etiketlemen gerekmekte!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!rol)   return message.channel.send( 
   {embeds: [a]} 
)

  
  const ok =  new MessageEmbed()
  .setDescription(`Abone rolü başarıyla ${rol} olarak ayarlandı!`)
  .setColor("RED")
  .setTitle(":white_check_mark: Başarılı!")

  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send({embeds: [ok]}
  )
}
}
