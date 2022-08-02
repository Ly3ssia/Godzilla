const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const Discord = require("discord.js")
module.exports = {
    name: 'toplu-rol-al',
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

  const data = message.guild.members.cache.filter(cs => cs.roles.cache.has(rol.id))
  if(!data.size > 0){
    const aq = new MessageEmbed()
    .setTitle("Godzilla - Herkesten Rol Alma Sistemi!")
    .setDescription("Bu rol kimsede olmadığı için alamıyorum!")
    .setColor("RED")
    return message.reply({embeds: [aq]})
  } else {
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
    .setTitle("Godzilla - Herkesten Rol Alma Sistemi!")
    .setDescription(`Sunucudaki Bütün Üyelerden ${rol} Rolünü Almak İstediğinden Emin Misin?`)
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
            const embed = new MessageEmbed()
    .setDescription(`**${rol} İsimli Rol Herkesten Alınmaya Başlanıyor...**`)
    .setTitle("Godzilla - Herkesten Rol Alma Sistemi!")
    .setColor("GOLD")
 radio.edit({embeds: [embed], components: []}).then(async ms => {

  data.map(async cs => {
    setTimeout(async() => {
      await cs.roles.remove(rol.id)
      let sad = new MessageEmbed()
      .setDescription(`**${rol} Adlı Rol Herkesten Alındı!**`)
      .setColor("GOLD")
      .setTitle("Godzilla - Herkesten Rol Alma Sistemi!")
 radio.edit({embeds: [sad], components: []})
    }, 1000)
  }  
);

    
  })
  }
    });
})
  }
}
}