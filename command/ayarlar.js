const { MessageEmbed } = require("discord.js")
const db = require("croxydb")
const db2 = require("quick.db")
const db3 = require("orio.db")

module.exports = {
  name: 'ayarlar',
  usage: '',
  category: "",
  description: ``,
  async execute(client, message, args) {

let sa = db.get(`kufur_${message.guild.id}`, '<:durum_aktif:998164460306968646>')
let as = db.get(`kufur_${message.guild.id}`, '<:durum_inaktif:998164501943816255>')
let rank = db.get(`aboneyetkilisi.${message.guild.id}`)
let butonrol =  db.get(`gçkanal_${message.guild.id}`);
let log = db.get(`log_${message.guild.id}`);
let mute = db.get(`mute_rol_${message.guild.id}`)
let otorol =  db.get(`orol_${message.guild.id}`)
let reklam = db.get(`reklamkick_${message.guild.id}`, '<:durum_aktif:998164460306968646>')
let reklam2 = db.get(`reklamkick_${message.guild.id}`, '<:durum_inaktif:998164501943816255>')
let ototag = db.get(`ototag_${message.guild.id}`);
let emoji = db.get(`emoji_${message.guild.id}`)
let destek = db3.get("destek"+message.guild.id)
let foto = db.get(`fotochat_${message.guild.id}`)
let prefix = db.get(`prefix_${message.guild.id}`)
let caps = db.get(`capslock_${message.guild.id}`)
let kayıt = db.get(`kayitrol_${message.guild.id}`)
let cekilis = db.get(`cekilis.${message.guild.id}_${message.channel.id}`)
    const embed = new MessageEmbed()
.setTitle(`${message.guild.name} Sunucusu Ayarları!`)
.addField("Abone Sistemi", rank ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Resimli Giriş Çıkış", butonrol ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Mod-Log", log ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Oto-Rol", otorol ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Oto-Tag", ototag ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Emoji Mesaj", emoji ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Destek Sistemi", destek ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Selam Sistemi", sa ? as : "<:durum_aktif:998164460306968646>" ? "<:durum_inaktif:998164501943816255>": "", true)
.addField("Fotoğraf Kanalı", foto ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Prefix Sistemi", prefix ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Caps Engel", caps ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Kayıt Sistemi", kayıt ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.addField("Aktif Çekiliş", cekilis ? "<:durum_aktif:998164460306968646>" : "<:durum_inaktif:998164501943816255>", true)
.setColor("RED")
message.channel.send({embeds: [embed]})
}
}
