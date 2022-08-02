const discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    name: 'kick',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  var guild = message.guild;
  var banlayan = message.author.tag;
  const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  var sebeb = args.slice(1).join(" ");

const configembedembedFooter = "Godzilla" 

  const xen1 = new MessageEmbed().setDescription("Bu işlemi gerçekleştirebilmek için `KICK_MEMBERS` yetkisine sahip olmalıyım").setColor("RED").setFooter(configembedembedFooter).setAuthor("Godzilla").setTimestamp()
  const xen2 = new MessageEmbed().setDescription(`${message.author} Bu komutu kullanabilmek için yetkin yok.`).setColor('RANDOM').setFooter(configembedembedFooter).setAuthor("Godzilla").setTimestamp()
  const xen3 = new MessageEmbed().setDescription("Lütfen geçerli birini etiketleyiniz.").setColor("RED").setFooter(configembedembedFooter).setAuthor("Godzilla").setTimestamp()
  const xen4 = new MessageEmbed().setDescription(`${message.author} Atmak istediğin kişi senden üst yada aynı pozisyonda.`).setColor("RANDOM").setFooter(configembedembedFooter).setAuthor("Godzilla").setTimestamp()
  const xen5 = new MessageEmbed().setDescription(`${message.author} sunucu sahibini atamazsın`).setColor("RANDOM").setFooter(configembedembedFooter).setAuthor("Godzilla").setTimestamp()


  if (!message.member.roles.cache.has("zort") && !message.member.permissions.has('ADMINISTRATOR')) { return message.channel.send({embeds: [xen2]})};
  if (!user) { return message.channel.send({embeds: [xen3]})}
  if (!message.author.id !== message.guild.ownerID) {
    if(user.roles.highest.position >= message.member.roles.highest.position) {return message.channel.send({embeds: [xen4]})}
  }
  if (user.id == message.guild.ownerID) return message.channel.send({embeds: [xen5]})

  var now = new Date()
  var sebepp = null

  if (!sebeb) {
    sebepp = "Sebep Belirtilmemiş."
  }
  if (sebeb) {
    sebepp = sebeb
  }
  try {
   
  const xen6 = new MessageEmbed()
  .setColor("RED")
    .setTitle("Godzilla - Kick Sistemi")
    .addField(`Atıcak Kişi:`, `${message.author.tag}`, true)
    .addField(`Atılacak Kişi:`, `${user}`, true)
    .addField(`Atılma Sebebi:`, `${sebepp ? sebepp : "Belirtilmemiş!"}`, true)
    .setColor(`RED`)
    .setFooter("Godzilla")
    .setImage('https://cdn.discordapp.com/attachments/945022876128518284/955437567954800691/standard.gif');


    const row = new MessageActionRow()
    .addComponents( 
        new MessageButton()
        .setStyle("SUCCESS")
    .setLabel('Evet')
    .setCustomId('allah'),
 new MessageButton()
 .setStyle("DANGER")
    .setLabel('Hayır')
    .setCustomId('allaj'))

  const istek = new MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })).setTimestamp().setFooter(configembedembedFooter).setColor('RED').setDescription(`<@!${user.id}> Adlı kullanıcı ${message.author} tarafından sunucudan atılacaktı fakat reddedildi.`);

  const a = new MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })).setTimestamp().setFooter(configembedembedFooter).setColor('GREEN').setDescription(` <@!${user.id}> Adlı kullanıcı <@!${message.author.id}> tarafından sunucudan atıldı.`);
  const oldembed = new MessageEmbed()
  .setColor("RED")
  .setTitle("Godzilla - Ban Sistemi")
  .addField(`Atıcak Kişi:`, `${message.author.tag}`, true)
  .addField(`Atılacak Kişi:`, `${user}`, true)
  .addField(`Atılma Sebebi:`, `${sebepp ? sebepp : "Belirtilmemiş!"}`, true)
  .setColor(`RED`)
  .setFooter("Godzilla")
  .setImage('https://cdn.discordapp.com/attachments/945022876128518284/955437567954800691/standard.gif');
  const newEmbeds = new MessageEmbed().setColor('GREEN').setDescription(` ${user} Adlı kullanıcı <@!${message.author.id}> tarafından sunucudan atıldı.`)
  let oldMsg = await message.channel.send({embeds: [oldembed], components: [row]}
   
  ).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let message = button
        if (message.customId == "allah") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
         user.kick()
      message.channel.send({embeds: [a]})
  msg.delete()
      if (oldMsg) oldMsg.delete({ timeout: 5000 });
      if (oldMsg) await oldMsg.edit({
        embed: newEmbeds,
        buttons: null
      })
    }
  })

  const hayir = new MessageEmbed().setColor('RED').setDescription(` ${user} Adlı kullanıcıyı ${message.author} tarafından sunucudan atma reddedildi.`)
  msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let message = button
  if (message.customId == "allaj") {
    const embedd = new Discord.MessageEmbed()
    .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
    .setColor("RED")
    if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
  
msg.delete()
      message.channel.send({embeds: [hayir]})
    
    }
  })
  })
} catch (error) {
  message.reply(`Bir hata oluştu!`)
  console.log(error)
}  

}
}