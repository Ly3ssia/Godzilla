const Discord = require("discord.js");
const db = require("croxydb");
const ayarlar = require("../config.json");

module.exports = {
    name: 'giriş-çıkış-sıfırla',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.reply(
      `Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`
    );

  let prefix = ayarlar.prefix;

  if (db.fetch(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
      .setColor("RED")
      .setTimestamp(`Ayarlamak İçin ${prefix}giriş-çıkış-ayarla #kanal`);
    message.channel.send({embeds: [embed]});
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Giriş Çıkış Başarıyla Sıfırlandı!`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send({embeds: [embed]});
  return;
}
}