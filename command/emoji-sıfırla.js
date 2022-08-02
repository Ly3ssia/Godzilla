const {MessageEmbed} = require('discord.js')
const db = require('croxydb')

module.exports = {
    name: 'emoji-sıfırla',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (!message.member.permissions.has("MANAGAE_MESSAGES")) return message.reply(`**Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
  if(!db.fetch(`emoji_${message.guild.id}`)) return message.reply({content:"Emoji mesaj sistemi daha ayarlı değil!"})
  
  db.delete(`emoji_${message.guild.id}`)
  message.reply({content:"Emoji mesaj sistemi başarıyla sıfırlandı!"})
  
}
}