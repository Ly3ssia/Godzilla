const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton  } = require('discord.js')
let database = require("croxydb")
const Discord = require("discord.js")

module.exports = {
    name: 'a',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
let users = message.mentions.users.first();

  const hata = new MessageEmbed()
  .setDescription("Abone rolünü ayarlamamışsın!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!abonerol) return message.channel.send(
  {embeds: [hata]}
  )
  
  const hata2 = new MessageEmbed()
  .setDescription("Abone yetkili rolünü ayarlamamışsın!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!aboneyetkilisi) return message.channel.send(
    
    {embeds: [hata2]}
  )
  let user = message.mentions.users.first()
  const ah =  new MessageEmbed()
  .setDescription(`Bu komutu kullanabilmek için gerekli yetkin yok!`)
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(
  {embeds: [ah]}
  )
  const o = new MessageEmbed()
  .setDescription("Lütfen bir kullanıcı etiketle!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  if(!message.mentions.users.first()) return message.channel.send(
    {embeds: [o]}
  )
  
 
  const buton = new MessageActionRow()
  .addComponents(
    new MessageButton()
  .setLabel("Abone Rolü Ver")
  .setEmoji("<:YouTube:998280961714298900> ")
  .setCustomId("abone")
  .setStyle("SECONDARY"),
 new MessageButton()
  .setLabel("Abone Rolünü Al")
  .setEmoji("<:YouTube:998280961714298900> ")
  .setCustomId("aboneal")
  .setStyle("SECONDARY"),
new MessageButton()
  .setLabel("Geri Dön")
  .setEmoji("<a:hayir:962617545796501534>")
  .setCustomId("iptal")
  .setStyle("DANGER"),
  )
  const em = new MessageEmbed()
  .setTitle("Godzilla - Abone Rol Sistemi!")
  .setDescription(`Abone Rolü Ver belirtilen kullanıcıya abone rolü verirsiniz.
  İşlemi İptal Etmek İçinde Geri Dön Butonuna Basın.
  
  Evet, şimdi ${user} kullanıcısında uygulamak istediğiniz işlem için butonlar ile etkileşime geçiniz.
  
 `)
 .setColor("RED")
 message.channel.send({embeds: [em], components: [buton]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "abone") {
    
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
  const embed = new MessageEmbed()
  .setTitle(`Godzilla - Abone Rol Sistemi!`)
.setDescription(`${user} Kullanıcısına Abone Rolü Başarıyla Verildi!`)
  .setColor(`RED`)
  .setFooter("Godzilla")

 radio.edit({embeds: [embed], components: []})

 message.guild.members.cache.get(users.id).roles.add(abonerol)
        }
        
        if (interaction.customId.includes(`aboneal`)) {
          
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new MessageEmbed()
.setTitle("Godzilla - Abone Rol Sistemi!")
.setDescription(`${user} Kullanıcısından Abone Rolü Başarıyla Alındı!`)
.setColor("RED")
radio.edit({embeds: [embed], components: []})
message.guild.members.cache.get(users.id).roles.remove(abonerol)
        }
    
        if (interaction.customId.includes(`iptal`)) {
         
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
          const embed = new MessageEmbed()
            .setTitle("Godzilla - Abone Rol Sistemi!")
            .setDescription(`İşlem Başarıyla İptal Edildi`)
            .setColor("RED")
            radio.edit({embeds: [embed], components: []})
        }
}
 )
    })
}
    }

