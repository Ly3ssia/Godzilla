
const ms = require('ms');
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
  name: 'giriş-çıkış',
  usage: '',
  category: "",
  description: ``,
  async execute(client, message, args) {
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({ content: " Bu Komutu Kullanmak İçin `Yönetici` Yetkisine İhtiyacım Var.", allowedMentions: { repliedUser: false } })
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let hgbb = message.mentions.channels.first()
  if(!hgbb) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
  
  
  
//  if(isNaN(sayi)) return message.channel.send("<:hayir:944620644535005205> Üzgünüm Sadece `sayı` Olması Gerekiyor")
//  if(sayi < message.guild.memberCount) return message.channel.send("<:hayir:944620644535005205> Üzgünüm Gireceğiniz Sayı Sunucu Sayısından Büyük Olması Gerekiyor.")
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Godzilla - Giriş Çıkış Sistemi!")
  .setColor("PURPLE")
  .setDescription(`╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   ║
   ║ • Karşılama Sistemi Aktif.
   ║
   ║ • Ayarlanan Kanal: ${hgbb}
   ║
   ║ • Artık Yeni Gelen Üyelere Ayarlanan Kanalda Karşılayacağım! 
   ║
   ╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ `)
  .setFooter("Godzilla")
  .setTimestamp();
 
    
    message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})

  db.set(`hgbb_${message.guild.id}`, hgbb.id)
  
}
}