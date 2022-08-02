const Discord = require("discord.js")
const ayarlar = require("../config.json")
const db = require("croxydb")
module.exports = {
    name: 'yardım',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let sprefix = db.fetch(`prefix_${message.guild.id}`)
  let prefix = sprefix || ayarlar.prefix
const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel("")
.setStyle("SECONDARY")
.setCustomId("help1")
.setEmoji("📗"),
new Discord.MessageButton()
.setLabel("")
.setStyle("SECONDARY")
.setCustomId("help2")
.setEmoji("📙"),
new Discord.MessageButton()
.setLabel("")
.setStyle("SECONDARY")
.setCustomId("help3")
.setEmoji("📕"),
new Discord.MessageButton()
.setLabel("")
.setStyle("SECONDARY")
.setCustomId("help4")
.setEmoji("📘"),
new Discord.MessageButton()
.setLabel("")
.setStyle("SECONDARY")
.setCustomId("help5")
.setEmoji("📔")
)

const row2 = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
      .setCustomId("yardım")
      .setPlaceholder('Kategoriler')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
       
 
        {
          label:"Moderasyon" ,
          description:"Moderasyon komutlarını görürsün!",
          value:"moderasyon",
          emoji:"🛠️"
        },
        {
            label:"Çekiliş",
            description:"Çekiliş komutlarını görürsün!",
            value:"giveaway",
            emoji:"🎉"
          },
        {
          label:"Kullanıcı",
          description:"Kullanıcı komutlarını görürsün!",
          value:"kullanıcı",
          emoji:"🎡"
        },  
         
          {
            label:"Destek",
            description:"Destek komutlarını görürsün!",
            value:"destek",
            emoji:"🎟️"
          },  
          {
            label:"Davet",
            description:"Davet komutlarını görürsün!",
            value:"davet",
            emoji:"👥"
          }, 
      
        
        ])
      )    
      
const embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.addField("・🛠️ Moderasyon Sistemi ↷",
"> **Moderasyon Sistemi** hakkında bilgi alabilirsiniz.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
.addField("・🎉 Çekiliş Sistemi  ↷",
"> **Çekiliş Sistemi** hakkında bilgi alabilirsiniz.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
.addField("・🎡 Eğlence Sistemi ↷",
"> **Eğlence Sistemi** hakkında bilgi alabilirsiniz.")
.addField("・🎟️ Destek Sistemi ↷",
"> **Destek Sistemi** hakkında bilgi alabilirsiniz.")
.addField("・👥 Davet Sistemi ↷",
"> **Davet Sistemi** hakkında bilgi alabilirsiniz.")
.addField("・🏠 Anasayfa ↷",
"> Bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
message.channel.send({embeds: [embed], components: [row2, row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "help1") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
const embeds = new Discord.MessageEmbed()   
.setTitle("Godzilla - Moderasyon Komutları!")
.setDescription(`${prefix}ban\n${prefix}a\n${prefix}buton-rol\n${prefix}abone-rol\n${prefix}abone-yetkilisi\n${prefix}ban-list\n${prefix}bot-otorol\n${prefix}caps-engel\n${prefix}emoji-ayarla\n${prefix}emoji-sıfırla\n${prefix}emoji-çal\n${prefix}forceban\n${prefix}foto-chat\n${prefix}giriş-çıkış\n${prefix}giriş-çıkış-sıfırla\n${prefix}kayıt-rol\n${prefix}kayıt-log\n${prefix}kayıt\n${prefix}mod-log\n${prefix}nuke\n${prefix}oto-rol\n${prefix}oto-tag\n${prefix}prefix\n${prefix}oylama\n${prefix}sil\n${prefix}yaz`)
radio.edit({embeds: [embeds], components: [row2, row]})    
}
if (interaction.customId == "help2") {
    const embedd = new Discord.MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
    .setColor("RED")
    if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed = new Discord.MessageEmbed()
.setTitle("Godzilla - Çekiliş Komutları!")
.setDescription(`${prefix}başlat\nReroll komutu çekilişi açtığınızda çekiliş bitince buton olarak gelicektir.`)
radio.edit({embeds: [embed], components: [row2, row]})
}
if (interaction.customId == "help3") {
    const embedd = new Discord.MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
    .setColor("RED")
    if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed = new Discord.MessageEmbed()
.setTitle("Godzilla - Kullanıcı Komutları!")
.setDescription(`${prefix}ara-110\n${prefix}ara-112\n${prefix}ara-155\n${prefix}avatar\n${prefix}banner\n${prefix}belge\n${prefix}kaç-cm\n${prefix}belge\n${prefix}dolar\n${prefix}davet\n${prefix}emoji-bilgi\n${prefix}emoji-id\n${prefix}kanal-id\n${prefix}kullanıcı-id\n${prefix}emojiler\n${prefix}hapishane\n${prefix}istatistik\n${prefix}ping\n${prefix}snake\n${prefix}snipe`)
radio.edit({embeds: [embed], components: [row2, row]})
}
if (interaction.customId == "help4") {
    const embedd = new Discord.MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
    .setColor("RED")
    if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed = new Discord.MessageEmbed()
.setTitle("Godzilla - Destek Komutları!")
.setDescription(`${prefix}ticket-yetkilisi\n${prefix}ticket-menü`)
radio.edit({embeds: [embed], components: [row2, row]})
}
if (interaction.customId == "help5") {
    const embedd = new Discord.MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
    .setColor("RED")
    if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed = new Discord.MessageEmbed()
.setTitle("Godzilla - Davet Komutları!")
.setDescription(`${prefix}invite\n${prefix}leaderboard`)
radio.edit({embeds: [embed], components: [row2, row]})
}
if (!interaction.isSelectMenu()) return;
        if (interaction.customId == "yardım") {
            if (interaction.values[0] == "moderasyon") {
                const embedd = new Discord.MessageEmbed()
                .setDescription(`Bu menüyü sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
                .setColor("RED")
                if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
      const embeds = new Discord.MessageEmbed()   
      .setTitle("Godzilla - Moderasyon Komutları!")
      .setDescription(`${prefix}ban\n${prefix}a\n${prefix}buton-rol\n${prefix}abone-rol\n${prefix}abone-yetkilisi\n${prefix}ban-list\n${prefix}bot-otorol\n${prefix}caps-engel\n${prefix}emoji-ayarla\n${prefix}emoji-sıfırla\n${prefix}emoji-çal\n${prefix}forceban\n${prefix}foto-chat\n${prefix}giriş-çıkış\n${prefix}giriş-çıkış-sıfırla\n${prefix}kayıt-rol\n${prefix}kayıt-log\n${prefix}kayıt\n${prefix}mod-log\n${prefix}nuke\n${prefix}oto-rol\n${prefix}oto-tag\n${prefix}prefix\n${prefix}oylama\n${prefix}sil\n${prefix}yaz`)
      radio.edit({embeds: [embeds], components: [row2, row]})   
            }
        }
        if (interaction.values[0] == "giveaway") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu menüyü sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new Discord.MessageEmbed()
            .setTitle("Godzilla - Çekiliş Komutları!")
            .setDescription(`${prefix}başlat\nReroll komutu çekilişi açtığınızda çekiliş bitince buton olarak gelicektir.`)
            radio.edit({embeds: [embed], components: [row2, row]})
        }
        if (interaction.values[0] == "kullanıcı") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu menüyü sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new Discord.MessageEmbed()
            .setTitle("Godzilla - Kullanıcı Komutları!")
            .setDescription(`${prefix}ara-110\n${prefix}ara-112\n${prefix}ara-155\n${prefix}avatar\n${prefix}banner\n${prefix}belge\n${prefix}kaç-cm\n${prefix}belge\n${prefix}dolar\n${prefix}davet\n${prefix}emoji-bilgi\n${prefix}emoji-id\n${prefix}kanal-id\n${prefix}kullanıcı-id\n${prefix}emojiler\n${prefix}hapishane\n${prefix}istatistik\n${prefix}ping\n${prefix}snake\n${prefix}snipe`)
            radio.edit({embeds: [embed], components: [row2, row]})
        }
        if (interaction.values[0] == "destek") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu menüyü sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new Discord.MessageEmbed()
        .setTitle("Godzilla - Destek Komutları!")
        .setDescription(`${prefix}ticket-yetkilisi\n${prefix}ticket-menü`)
        radio.edit({embeds: [embed], components: [row2, row]})
        }
        if (interaction.values[0] == "davet") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu menüyü sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new Discord.MessageEmbed()
        .setTitle("Godzilla - Davet Komutları!")
        .setDescription(`${prefix}invite\n${prefix}leaderboard`)
        radio.edit({embeds: [embed], components: [row2, row]})
        }
    })
    })
}
}