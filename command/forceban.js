const Discord = require('discord.js')

module.exports = {
  name: 'forceban',
  usage: '',
  category: "",
  description: ``,
  async execute(client, message, args) {
if (!message.member.permissions.has("BAN_MEMBERS")) {
            return message.reply("❌ Bu komutu kullanabilmek için **Üyeleri Yasakla** gerekir.");
   }
    if (!args[0]) return message.reply("Bir **ID** Girmelisin");
    let kisi = args[0];
    message.guild.members.ban(kisi).then(() => {
        message.reply(`${kisi} ID'li kullanıcı başarıyla banlandı.`)
    
    }).catch(err => {
        message.rely("Bir hata oluştu.");
    })
}
}