
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: 'tkm',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  
  /* RomanBot  */
  
  let tkkm = [
    
    "👊",
    "📄",
    "✂️"
    
     
  ];
  
  
  let sonuc = tkkm[Math.floor(Math.random() * tkkm.length)];
  
  
  
  const embed1 = new MessageEmbed()

  .setColor("PURPLE")
  .setDescription(`**Taş Kağıt Makas Sistemi**
  
    
    Lütfen Butonlardan Birini Seç, **Süren 20 Saniye.**`)
const tkm = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('tas')
          .setEmoji('👊')
                    .setStyle('SUCCESS'),
        
                new MessageButton()
                    .setCustomId('kagit')
                    .setEmoji('📄')
                    .setStyle('SUCCESS'),
        
        new MessageButton()
        .setCustomId('makas')
        .setEmoji('✂️')
        .setStyle('SUCCESS')
            );
            
  

  
  message.reply({embeds: [embed1],components: [tkm]}).then(async msg => {

    const filter = x => x.user.id === message.author.id
    let collector = msg.createMessageComponentCollector({ filter, time: 20 * 1000 })
     
    collector.on("collect", async interaction => {
    if (!interaction.isButton()) return;

    if(interaction.customId === "tas") {
      const embedd = new Discord.MessageEmbed()
      .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
      .setColor("RED")
      if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})  
     if(sonuc == '✂️') {
    
    var kazanan = 'Tebrikler, **Kazandın!**'
    
  }
  
  if(sonuc == '📄') {
    
    var kazanan = 'Üzgünüm, **Kaybettiniz!**'
    
  }
  
  if(sonuc == '👊') {
    
    var kazanan = 'Tüh, **Berabere!**'
    
  }
  
  const embed = new MessageEmbed()
  
  .setColor('PURPLE')
  .setDescription(`${kazanan}
  
  Godzillanın Seçimi: ${sonuc}
  Senin Seçimin: 👊
 
  
  `)
            msg.edit({embeds: [embed], components: []});
        }
        
         if(interaction.customId === "kagit") {
          const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
     if(sonuc == '✂️') {
    
    var kazanan = 'Üzgünüm, **Kaybettiniz!**'
    
  }
  
  if(sonuc == '📄') {
    
    var kazanan = 'Tüh, **Berabere!**'
    
  }
  
  if(sonuc == '👊') {
    
    var kazanan = 'Tebrikler, **Kazandınız!**'
    
  }
  
  const embed2 = new MessageEmbed()

  .setColor('PURPLE')
  .setDescription(`${kazanan}
  
  Godzillanın Seçimi: ${sonuc}
  Senin Seçimin: 📄
  
  
  `)
            msg.edit({embeds: [embed2], components: []});
        }

          if(interaction.customId === "makas") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
     if(sonuc == '✂️') {
    
    var kazanan = 'Tüh, **Berabere!**'
    
  }
  
  if(sonuc == '📄') {
    
    var kazanan = 'Tebrikler, **Kazandınız!**'
    
  }
  
  if(sonuc == '👊') {
    
    var kazanan = 'Üzgünüm, **Kaybettiniz!**'
    
  }
  
  const embed3 = new MessageEmbed()

  .setColor('PURPLE')
  .setDescription(`${kazanan}
  
  Godzillanın Seçimi: ${sonuc}
  Senin Seçimin: ✂️
  
  
  `)
            msg.edit({embeds: [embed3], components: []});
        }



    interaction.deferUpdate();
    })
    
    collector.on("end", async interaction => {
    

    
            })
        }) 
  /* RomanBot */
}
}