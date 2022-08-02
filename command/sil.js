const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'sil',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
      const embed31 = new MessageEmbed()
      .setTitle(":x: Başarısız!")
      .setDescription("Bu komutu kullanabilmek için **Rolleri Yönet** yetkisine sahip olmalısın!")
      .setColor("RED")
         if (!message.member.permissions.has("MANAGE_ROLES"))
         return message.channel.send({embeds: [embed31]}
          
         );
      const row = new MessageActionRow()
  .addComponents(
  new MessageButton()
  .setLabel("10")
  .setStyle("PRIMARY")
  .setCustomId("10"),
  new MessageButton()
  .setLabel("20")
  .setStyle("PRIMARY")
  .setCustomId("20"),
  new MessageButton()
  .setLabel("50")
  .setStyle("PRIMARY")
  .setCustomId("50"),
  new MessageButton()
  .setLabel("100")
  .setStyle("PRIMARY")
  .setCustomId("100"),
  new MessageButton()
  .setLabel("500")
  .setStyle("PRIMARY")
  .setCustomId("500")
  )
  const row2 = new MessageActionRow()
  .addComponents(
  new MessageButton()
  .setLabel("Sil")
  .setStyle("DANGER")
  .setEmoji("<:cop:1002538609003470898>")
  .setCustomId("cop"))
  message.channel.send({content: "Aşağıdaki Butonlardan Kaç Mesaj Siliceğini Seçebilirsin!", components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "10") {
          const embedd = new MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir`)
          .setColor("RED")
          if(button.user.id !== message.author.id) return button.user.send({embeds: [embedd], ephemeral: true}).catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
          message.channel.bulkDelete(12)
          const embed = new MessageEmbed()
          .setDescription("Başarıyla **10** Adet Mesaj Geri Dönüştürüldü!")
          .setColor("RED")
          message.channel.send({embeds: [embed]})
        }
   
    
        if (interaction.customId == "20") {
          const embedd = new MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir`)
          .setColor("RED")
          if(button.user.id !== message.author.id) return button.user.send({embeds: [embedd], ephemeral: true}).catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
          message.channel.bulkDelete(22)
          const embed = new MessageEmbed()
          .setDescription("Başarıyla **20** Adet Mesaj Geri Dönüştürüldü!")
          .setColor("RED")
          message.channel.send({embeds: [embed]})
        
      }
    
      if (interaction.customId == "50") {
        const embedd = new MessageEmbed()
        .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir`)
        .setColor("RED")
        if(button.user.id !== message.author.id) return button.user.send({embeds: [embedd], ephemeral: true}).catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
        message.channel.bulkDelete(52)
        const embed = new MessageEmbed()
        .setDescription("Başarıyla **50** Adet Mesaj Geri Dönüştürüldü!")
        .setColor("RED")
        message.channel.send({embeds: [embed]})
      
    }  
    if (interaction.customId == "100") {
      const embedd = new MessageEmbed()
      .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir`)
      .setColor("RED")
      if(button.user.id !== message.author.id) return button.user.send({embeds: [embedd], ephemeral: true}).catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
      message.channel.bulkDelete(100)
      message.channel.bulkDelete(2)
      const embed = new MessageEmbed()
      .setDescription("Başarıyla **100** Adet Mesaj Geri Dönüştürüldü!")
      .setColor("RED")
      message.channel.send({embeds: [embed]})
    
  }
  if (interaction.customId == "500") {
    const embedd = new MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir`)
    .setColor("RED")
    if(button.user.id !== message.author.id) return button.user.send({embeds: [embedd], ephemeral: true}).catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(2)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    const embed = new MessageEmbed()
    .setDescription("Başarıyla **500** Adet Mesaj Geri Dönüştürüldü!")
    .setColor("RED")
    message.channel.send({embeds: [embed]})
 
} 

  }

      )
  })
  
    }
  }

  