const discord = require('discord.js');
const db = require('croxydb')


module.exports = {
    name: 'kayıt',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`**Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
  
  let kanal = db.fetch(`kayitkanal_${message.guild.id}`)
  let log = db.fetch(`kayitlog_${message.guild.id}`)
  let rol = db.fetch(`kayitrol_${message.guild.id}`)
  if(!log) return message.reply({content: " **HATA:** Log Kanalı ayarlanmamış", allowedMentions: {repliedUser: false}})
  
if(!rol) return message.reply({content: " **HATA:** rol ayarlanmamış!", allowedMentions: {repliedUser: false}})
  
let user = message.mentions.members.first()
if(!user) return message.reply({content:" **HATA:** birini etiketlemelisin!", allowedMentions: {repliedUser: false}})
let isim = args[1]
if(!isim) return message.reply({content: " **HATA:** bir isim belirtmen gerekiyor.", allowedMentions: {repliedUser: false}})
let yas = args[2]
if(!yas) return message.reply({content: " **HATA:** bir yaş belirtmen gerekiyor.", allowedMentions: {repliedUser: false}})
if(isNaN(yas)) return message.reply({content: " **HATA:** bir sayı.", allowedMentions: {repliedUser: false}})
  
user.setNickname(`${isim} | ${yas}`)
user.roles.add(rol) 

  message.reply({content: "<@"+user+"> Başarıyla kayıt oldu 📜", allowedMentions: {repliedUser: false}})
  client.channels.cache.get(log).send(`📜 <@${user.id}> Başarıyla Kayıt Oldu.`)
  
}
}