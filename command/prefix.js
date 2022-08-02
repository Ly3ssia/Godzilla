const Discord = require("discord.js");
const db = require("croxydb")
const ayarlar = require("../config.json")


module.exports = {
    name: 'prefix',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle(":x: Başarısız!")
  .setDescription(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  .setColor("RED")
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send({embeds: [embed]})
let prefixdb = db.fetch(`prefix_${message.guild.id}`)
let prefix = prefixdb || ayarlar.prefix
if(!args[0]) {
 const embed33 = new Discord.MessageEmbed()
 .setTitle(":x: Başarısız!")
 .setDescription("Lütfen ayarla veya sıfırla yazın!")
 .setColor("RED")
 message.channel.send({embeds: [embed33]})
  
}
if(args[0] === "ayarla"){
  let yeniprefix = args[1]
  const embed = new Discord.MessageEmbed()
  .setTitle(":x: Hatalı Kullanım!")
  .setDescription("Lütfen bir prefix gir!")
  .setColor("RED")
  if(!yeniprefix) return message.channel.send({embeds: [embed]})
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":x: Hata!")
  .setDescription("Bu sunucuya özel prefix zaten ayarlı!")
  .setColor("RED")
  if(db.has(`prefix_${message.guild.id}`)) return message.channel.send(embed2)
  db.set(`prefix_${message.guild.id}`, yeniprefix)
  const embed3 = new Discord.MessageEmbed()
  .setTitle(":white_check_mark: Başarılı!")
  .setDescription(`Ayarlanan Prefix: ${yeniprefix}\nÖnceki Prefix: g!\nAyarlayan: ${message.author.tag}`)
  .setColor("GREEN")
  
  message.channel.send({embeds: [embed3]})
}
if(args[0] === "sıfırla"){
  let yeniprefix = args[1]
  const embed4 = new Discord.MessageEmbed()
  .setTitle(":x: Hatalı Kullanım!")
  .setDescription("Lütfen bir prefix gir!")
  .setColor("RED")
  if(!yeniprefix) return message.channel.send({embeds: [embed4]})
  const embed5 = new Discord.MessageEmbed()
  .setTitle(":x: Hata!")
  .setDescription("Ayarlanmayan Şeyi Sıfırlayamazsın!")
  .setColor("RED")
  if(!db.fetch(`prefix_${message.guild.id}`)) return message.channel.send({embeds: [embed5]})
  db.delete(`prefix_${message.guild.id}`)
  const embed6 = new Discord.MessageEmbed()
  .setTitle(":white_check_mark: Başarılı!")
  .setDescription(`Eski Prefix: ${yeniprefix}\nYeni Prefix: g!\nSıfırlayan: ${message.author.tag}`)
  .setColor("GREEN")

  message.channel.send({embeds: [embed6]})
}
}
}