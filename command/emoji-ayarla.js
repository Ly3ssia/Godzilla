const {MessageEmbed} = require('discord.js')
const db = require('croxydb')


module.exports = {
    name: 'emoji-ayarla',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (!message.member.permissions.has("MANAGAE_MESSAGES")) return message.reply(`**Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
  let emoji = db.fetch(`emoji_${message.guild.id}`)
  let kanal = message.mentions.channels.first()
  let emoji1 = args[0]
  let emoji2 = args[1]
  
  if(!emoji) {
    
  if(!emoji1) return message.reply({content: "Lütfen 1. emojiyi gir!"})
  if(!emoji2) return message.reply({content: 'Lütfen 2. emojiyi gir!'})
  if(!kanal) return message.reply({content: 'Lütfen bir kanal etiketle!'})
    
    db.set(`emoji_${message.guild.id}`, {kanal: kanal.id, e1: emoji1, e2: emoji2})
    message.reply({content: `Başarıyla emoji kanalı ve emojiler ayarlandı!`})
    
  } else {
    message.reply({content:"Emoji mesaj sistemi zaten ayarlı!"})
  }
}
}