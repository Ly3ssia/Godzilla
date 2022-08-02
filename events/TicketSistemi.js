const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton  } = require('discord.js')
const db = require("croxydb")
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction, message, args) {
       
        
        const Buton = new MessageActionRow().addComponents(
new MessageButton().setCustomId("kaydet").setLabel("Kaydet Ve Kapat").setStyle("SECONDARY").setEmoji("📒"),
new MessageButton().setCustomId("ozel").setLabel("Özel Görüşme").setStyle("SUCCESS").setEmoji("🤝"),
new MessageButton().setCustomId("kaydetme").setLabel("Desteği Sil").setStyle("DANGER").setEmoji("🗑️"),

) 

let data3 =  db.get("destek"+ interaction.guild.id)
if (!data3) return console.log("data boş")
let roleStaff = interaction.guild.roles.cache.get(data3.rolID)

if (interaction.isButton()){
    const Buton2 = new MessageActionRow().addComponents(
           new MessageButton()
    .setCustomId("geri")
    .setLabel("Geri Yükle")
    .setStyle("SUCCESS")
    .setEmoji("♻️"),
    new MessageButton().setCustomId("kaydetm").setLabel("Desteği Sil").setStyle("DANGER").setEmoji("🗑️"),)
    const Buton3 = new MessageActionRow().addComponents(
        
 new MessageButton().setCustomId("kaydet3").setLabel("Desteği Sil").setStyle("DANGER").setEmoji("🗑️"),)
    if (interaction.customId == "kaydet") {
     const channel = interaction.channel
        channel.permissionOverwrites.edit(
            interaction.user.id, {  
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
          })
const aq = new MessageEmbed()
.setDescription("Bu Destek Talebi Kapatılmıştır.")
.setColor("RED")

interaction.channel.send({embeds: [aq], components: [Buton2]})

        }  
        if (interaction.customId.includes(`ozel`)) {
            const channel = interaction.channel
            channel.permissionOverwrites.edit(
                roleStaff, {  
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
              })
              const aq2 = new MessageEmbed()
              .setDescription("Bu Destek Talebi **Özel Görüşme** Olarak Ayarlanmıştır.")
              .setColor("RED")
            
              interaction.channel.send({embeds: [aq2], components: [Buton3]})
            }
            if (interaction.customId.includes(`kaydetm`)) {
                const channel = interaction.channel
                channel.delete();
                }
                if (interaction.customId.includes(`kaydetme`)) {
            const channel = interaction.channel
            channel.delete();
            }
            if (interaction.customId.includes(`geri`)) {
                const channel = interaction.channel
                channel.permissionOverwrites.edit(
                  interaction.user.id, {  
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                  })
                  const aq3 = new MessageEmbed()
                  .setDescription("Bu Destek Talebi Geri Yüklenmiştir.")
                  .setColor("RED")
             
                  interaction.channel.send({embeds: [aq3], components: [Buton3]})
                }
                if (interaction.customId.includes(`kaydet3`)) {
                    const channel = interaction.channel
                    channel.delete();
                    }
            }

             
              
         
        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
     
if (!interaction.isSelectMenu()) return;
        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "menu3") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                })
                
                .then((c)=>{
                    const i1 = new MessageEmbed()
                    .setTitle('Godzilla - Destek Sistemi')
                    .setDescription(`Kullanıcını Destek Talebini Menüdeki 3. Kısma Basarak Açtı!\n\nDestek Oluşturan: ${interaction.user}`)
                    .setColor("RED")
                    c.send({embeds: [i1], content: `${roleStaff} | ${interaction.user}`, components: [Buton]})
                    interaction.reply({content: `Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "menu2") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                 
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const i2 = new MessageEmbed()
                    .setTitle('Godzilla - Destek Sistemi')
                    .setDescription(`Kullanıcının Bu Destek Talebini Menüdeki 2. Kısıma Basarak Oluşturdu!\n\nDestek Oluşturan: ${interaction.user}`)
                    .setColor("RED")
                    c.send({embeds: [i2], content: `${roleStaff} | ${interaction.user}`, components: [Buton]})
                    interaction.reply({content: `Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "menu1") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                  
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    
                    const embed = new MessageEmbed()
                    .setTitle('Godzilla - Destek Sistemi')
                    .setDescription(`Kullanıcının Bu Destek Talebini Menüdeki 1. Kısıma Basarak Oluşturdu!\n\nDestek Oluşturan: ${interaction.user}`)
                    .setColor("RED")
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [Buton]})
                    interaction.reply({content: `Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
               
                })
            }
        }
    }
}