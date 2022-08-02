const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
const db = require('croxydb')

module.exports = {
        name: 'buton-rol',
        usage: '',
        category: "",
        description: ``,
        async execute(client, message, args) {
  if (!message.member.permissions.has("MANAGA_MESSAGES")) return message.reply(`   **Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
 let buton = db.fetch(`buton_${message.guild.id}`)
 let rol = message.mentions.roles.first()
 let kanal = message.mentions.channels.first()
 let mesaj = args[2]
 let icerik = args.slice(3).join(" ")

 
 const e = new MessageEmbed()
 .setColor("RED")
 .setDescription("Yanlış şekilde kullandınız. Örn: **g!buton-rol @rol #kanal <buton yazısı> <metin>**")
 
 const l = new MessageEmbed()
 .setColor("RED")
 .setDescription(icerik)

if(!buton) {

if(!rol) return message.reply({embeds: [e]})   
if(!kanal) return message.reply({embeds: [e]})
if(!icerik) return message.reply({embeds: [e]})

 const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('buton')
                 .setLabel(mesaj)
                    .setStyle('SECONDARY'),
            );
 
 

db.set(`buton_${message.guild.id}`, rol.id)
client.channels.cache.get(kanal.id).send({embeds: [l], components: [row]})

 }
 
        }
}  
