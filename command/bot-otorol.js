const Discord = require("discord.js");
const db = require("croxydb")
const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js")

module.exports = {
    name: 'bot-otorol',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  const ayarlar = require("../config.json")
  const db = require("croxydb")
  let sprefix = db.fetch(`prefix_${message.guild.id}`)
    let prefix = sprefix || ayarlar.prefix
  const embed = new MessageEmbed()
  .setTitle(":x: Başarısız!")
  .setDescription(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  .setColor("RED")
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send({embeds: [embed]})
const embed2 = new MessageEmbed()
.setTitle(":x: Hatalı Kullanım!")
.setDescription(`${prefix}bot-otorol aç @Bot veya ${prefix}bot-otorol kapat`)
.setColor("RED")
  if (!args[0])
    return message.channel.send({embeds: [embed2]});
  let rol = message.mentions.roles.first();
  if (args[0] == "aç") {
   const embed3 = new MessageEmbed()
   .setTitle(":x: Hatalı Kullanım!")
   .setDescription(`${prefix}bot-otorol aç veya ${prefix}bototorol kapat`)
   .setColor("RED")
    if (!rol)
      return message.channel.send({embeds: [embed3]});
const embed4 = new MessageEmbed()
.setTitle(":white_check_mark: Başarılı!")
.setDescription( `Bot otorol \`${rol.name}\` olarak ayarlandı. Kapatmak için \`${prefix}bot-otorol kapat\` yazmalısın.`)
.setColor("GREEN")
    db.set(`bototorol_${message.guild.id}`, rol.id);
    message.channel.send({embeds: [embed4]});
  }

  if (args[0] == "kapat") {
    db.delete(`bototorol_${message.guild.id}`);
 const embed5 = new Discord.MessageEmbed()
 .setTitle(":white_check_mark: Başarılı!")
 .setDescription("Sistem Başarıyla Sıfırlandı!")
 .setColor("GREEN")
    message.channel.send({embeds: [embed5]});
  }
}
}

