const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js")


module.exports = {
    name: 'mod-log',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args, con) {
 
const embed = new MessageEmbed()
.setTitle("Godzilla - Mod Log Sistemi!")
.setDescription("Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olman gerekiyor!")
.setColor("RED")
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send(
      {embeds: [embed]}
    );

  let logk = message.mentions.channels.first();
  let logkanal = await db.fetch(`log_${message.guild.id}`);
  if (args[0] === "sıfırla") {
    if (!logkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`ModLog Kanalı Zaten Ayarlı Değil!`)
          .setTitle("Godzilla - Mod Log Sistemi!")
      );
    db.delete(`log_${message.guild.id}`);
    let sad = new MessageEmbed()
 
    .setColor("#ff0000")
    .setDescription(`✅ | Mod-log kanalı başarıyla sıfırlandı.`)
    .setTitle("Godzilla - Mod Log Sistemi!")
    message.channel.send(
     
{embeds: [sad]}
    )
    return;
}
let asd =  new MessageEmbed()
  .setColor("RED")
  .setDescription("Lütfen bir kanal etiketle!")
    .setTitle("Godzilla - Mod Log Sistemi!")
  if (!logk)
  
    return message.channel.send(
     {embeds: [asd]}
        )
    
const row = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setLabel("Sıfırla!")
    .setStyle("DANGER")
    .setCustomId("sıfırla")
)
    
  db.set(`log_${message.guild.id}`, logk.id);
  const a = new MessageEmbed()
  .setColor("RED")
  .setDescription(` Mod-log kanalı başarıyla ${logk} olarak ayarlandı!\nSıfırlamak için aşağıda ki butona basabilir veya g!mod-log sıfırla yazabilirsin!`)
  .setTitle("Godzilla - Mod Log Sistemi!")
  message.channel.send({embeds: [a], components: [row]}).then(radio => {
   


    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
        let interaction = button
          if (interaction.customId == "sıfırla") {
            const embedd = new Discord.MessageEmbed()
            .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("RED")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            radio.delete()
 
  
    db.delete(`log_${message.guild.id}`);
    let del = new MessageEmbed()
  
    .setColor("RED")
    .setDescription(
      `✅ | Mod-log kanalı başarıyla sıfırlandı.`)
      .setTitle("Godzilla - Mod Log Sistemi!")
    
    message.channel.send({embeds: [del]})
     
    
        }
  
    
  
})
  
  })
}
}
