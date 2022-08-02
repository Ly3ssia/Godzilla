const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: 'herkese-rol-ver',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
 const embed31 = new MessageEmbed()
 .setTitle(":x: Başarısız!")
 .setDescription("Bu komutu kullanabilmek için **Rolleri Yönet** yetkisine sahip olmalısın!")
 .setColor("RED")
    if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send({embeds: [embed31]}
     
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.get(args[0]) ||
    message.guild.roles.cache.find(rol => rol.name === args[0]);
    const embed3 = new MessageEmbed()
    .setTitle(":x: Başarısız!")
    .setDescription("Lütfen Bir Rol Etiketle!")
    .setColor("RED")
    if (!rol)
  
  
  return message.channel.send(
      {embeds: [embed3]}
    );
    
 const row = new MessageActionRow()
 .addComponents(
     new MessageButton()
.setLabel("Evet")
.setStyle("SUCCESS")
.setCustomId("evet"),
new MessageButton()
.setLabel("Hayır")
.setStyle("DANGER")
.setCustomId("h"))

const a = new MessageEmbed()
.setTitle("Godzilla - Herkese Rol Verme Sistemi!")
.setDescription(`Sunucudaki Bütün Üyelere ${rol} Rolünü Vermek İstediğine Emin Misin?`)
.setColor("GOLD")
message.channel.send({embeds: [a], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "h") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
          message.channel.send("İşlem İptal Edildi!")  
        radio.delete()
        }
        if (interaction.customId == "evet") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
    const embed313 = new MessageEmbed()
    .setTitle("Godzilla - Rol Verme Sistemi!")
    .setDescription("Herkese Rolü Dağıtıyorum...")
    .setColor("GOLD")
  radio.edit({embeds: [embed313], components: []}).then(msg => {
  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
    setTimeout(() => {
    }, 1000)
  });
  const embed = new MessageEmbed()
    .setDescription(`✅ **Herkese ${rol} Adlı Rol Verildi!**`)

    .setTitle("Godzilla - Rol Verme Sistemi!")
    .setColor("GOLD")
 radio.edit({embeds: [embed]});
  
 
}

    )
}
});
})
}
}