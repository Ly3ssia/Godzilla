const discord = require('discord.js');
const db = require('croxydb')



module.exports = {
    name: 'kayıt-log',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`   **Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
  
let kanal = message.mentions.channels.first()
if(!kanal) return message.reply({content: " **HATA:** bir kanal etiketlemen gerekiyor.", allowedMentions: {repliedUser: false}})
 
  
  db.set(`kayitlog_${message.guild.id}`, kanal.id)
message.reply({content: `
**BAŞARILI**:
• Kayıt log **${kanal.name}** olarak ayarlandı.
`, allowedMentions: {repliedUser: false}})
  
}
}