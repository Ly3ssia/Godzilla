const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const Discord = require("discord.js")
module.exports = {
    name: 'istatistik',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (message.channel.type !== 'dm') {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    
 const row = new MessageActionRow()
 .addComponents(
     new MessageButton()
 .setLabel("Güncelle")
 .setStyle("PRIMARY")
 .setCustomId("gu"),
 new MessageButton()
 .setLabel("Sil")
 .setStyle("DANGER")
 .setCustomId("deletes")
 .setEmoji("<:cop:1002538609003470898>")
     )
    const istatistikler = new MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setFooter("Godzilla", client.user.avatarURL())
    .addField("> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("> **Çalışma süresi**", seksizaman, true)
    .addField("> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("> **Node.JS sürüm**", `${process.version}`, true)
    .addField("> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("> **Bit**", `\`${os.arch()}\``, true)
    .addField("> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
  return message.channel.send({embeds: [istatistikler], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "h") {
message.channel.send("İşlem İptal Edildi!")
radio.delete()       
}
if (interaction.customId == "gu") {
  const embedd = new Discord.MessageEmbed()
  .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
  .setColor("RED")
  if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})  
  const istatistikler = new MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setFooter("Godzilla", client.user.avatarURL())
    .addField("> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("> **Çalışma süresi**", seksizaman, true)
    .addField("> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("> **Node.JS sürüm**", `${process.version}`, true)
    .addField("> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("> **Bit**", `\`${os.arch()}\``, true)
    .addField("> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    radio.edit({embeds: [istatistikler], components: []})
}
if (interaction.customId == "deletes") {
radio.delete()
}
})
  })
}
    }
}