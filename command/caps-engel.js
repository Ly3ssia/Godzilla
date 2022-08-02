const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../config.json')


module.exports = {
    name: 'caps-engel',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın.`)


 
   if (!args[0]) {
 message.channel.send(`Aç veya Kapat yaz!`)
  }




  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(`Capslock Engel Sistemi Aktif!`)
  return
}




if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(`Capslock Engel Sistemi Devre Dışı!`)
return
}

  
}
}