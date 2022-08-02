const Discord = require("discord.js");
const ayarlar = require("../config.json");
const db = require("croxydb");

module.exports = {
    name: 'giriş-çıkış',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin!");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  message.reply(`:white_check_mark: | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
}
}
