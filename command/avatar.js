
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
    name: 'avatar',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  if (message.author.bot) return;
  message.channel.send(`Avatar Yükleniyor..`).then(async msj => {
    const botPing = msj.createdTimestamp - message.createdTimestamp;
    msj.delete();


      const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
             .setLabel("128")
             .setStyle("SECONDARY")
             .setEmoji("869707733685927936")
             .setCustomId("9"),
             new MessageButton()
             .setLabel("1024")
             .setEmoji("869707733685927936")
             .setStyle("SECONDARY")
             .setCustomId("10")
      )

    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
    
let user = await client.users.fetch(userid);
const row2 = new MessageActionRow()
.addComponents(
  new MessageButton()
  .setLabel("JPEG")
  .setStyle("LINK")

  .setURL(`${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })}`),
  new MessageButton()
  .setLabel("PNG")
  .setStyle("LINK")
  .setURL(`${user.displayAvatarURL({ format: 'png',  size: 1024 })}`)
 ,
)
const row3 = new MessageActionRow()
.addComponents(
  new MessageButton()
  .setLabel("JPEG")
  .setStyle("LINK")

  .setURL(`${user.displayAvatarURL({ format: 'jpeg',  size: 128 })}`),
  new MessageButton()
  .setLabel("PNG")
  .setStyle("LINK")
  .setURL(`${user.displayAvatarURL({ format: 'png',  size: 128 })}`)
  ,
)
    
  let embed = new MessageEmbed()

.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
 
  let embed1 = new MessageEmbed()

.setImage(user.displayAvatarURL({dynamic: true, size: 128}))
.setColor("RANDOM")

 message.channel.send({ embeds: [embed], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
        let interaction = button

if (interaction.customId == "10") {
  const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
      

        radio.edit({
          embeds: [embed],
          components: [row2]
        });
      }
      if (interaction.customId == "9") {
        const embedd = new Discord.MessageEmbed()
        .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
        .setColor("RED")
        if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
        radio.edit({
          embeds: [embed1],
          components: [row3]
        });
          
      }
    })
  })
})
}
}

