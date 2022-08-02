const Discord = require('discord.js')
const db = require('croxydb')
const ayarlar = require("../config.json")
module.exports = {
    name: 'oto-rol',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
        let sprefix = db.fetch(`prefix_${message.guild.id}`)
  let prefix = sprefix || ayarlar.prefix
const embed = new Discord.MessageEmbed()
.setTitle(":x: Başarısız!")
.setDescription("Bu komutu kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olman gerekir!")
.setColor("RED")
if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embeds: [embed]});


      const hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(":x: Başarısız!")
      .setDescription(`**\`${prefix}oto-rol aç @rol #kanal\` veya \`${prefix}oto-rol kapat\`**`)
  

      if (!["kapat", "aç"].includes(args[0])){
        message.channel.send({embeds: [hata]})
        }

        if(args[0] === "aç"){

            db.set(`otorol_${message.guild.id}`, 'acik')

          
            let rol = message.mentions.roles.first()
            let kanal = message.mentions.channels.first()
    
            if(!rol){
                const roletiket = new Discord.MessageEmbed()
                .setDescription(`**Lütfen Bir Rol Etiketle!**`)
                .setColor('RED')
                .setTitle(":x: Başarısız!")
                message.channel.send({embeds: [roletiket]})
            }

            if(!kanal){
                const roletiket = new Discord.MessageEmbed()
                .setDescription(`**Lütfen Bir Kanal Etiketle!**`)
                .setColor('RED')
                .setTitle(":x: Başarısız!")
                message.channel.send({embeds: [roletiket]})
            }

            if(kanal){

                db.set(`orol_${message.guild.id}`, rol.id)
                db.set(`okanal_${message.guild.id}`, kanal.id)
    
           
                const acıldı = new Discord.MessageEmbed()
                .setDescription(`
                
                    \`Rol\` = ${rol}
                    \`Kanal\` = ${kanal}
                `)
                .setColor('GREEN')
                .setTitle(":white_check_mark: Başarılı!")
                message.channel.send({embeds: [acıldı]})
            }
        } else if(args[0] === "kapat"){
   
            db.delete(`orol_${message.guild.id}`)         

            const kapatıldı = new Discord.MessageEmbed()
            .setDescription(`**Otorol Sistemi Başarıyla Kapatıldı!**`)
            .setColor('GREEN')
            .setTitle(":white_check_mark: Başarılı!")
            message.channel.send({embeds: [kapatıldı]})
        }
    } 
}
