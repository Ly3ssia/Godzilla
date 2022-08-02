const { MessageEmbed, MessageButton, MessageActionRow }= require("discord.js");
const db = require("croxydb");
const Discord = require("discord.js")

module.exports = {
    name: 'afk',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  var kullanıcı = message.author;
  var sebep = args.slice(0).join("  ");
  const sda = new MessageEmbed()
  .setTitle(`:x: Başarısız!`)
  .setDescription(`Lütfen bir sebep belirt!`)
  .setColor("RED")
  if (!sebep)
  
    return message.channel.send({embeds: [sda]}
      
    );
    const buton = new MessageActionRow()
    .addComponents(
      new MessageButton()
    .setLabel("Evet")
    .setStyle("SUCCESS")
    .setCustomId("evet") ,
   new MessageButton()
    .setLabel("Hayır")
    .setStyle("DANGER")
    .setCustomId("eve"))
  let dcs15 = new MessageEmbed()
    .setTitle(`Uyarı!`)
    .setTimestamp()
    .setDescription(`**AFK Moduna Girmek İçin Onay Veriyor Musun?**`)
    .setColor("GOLD");
  message.channel.send({embeds: [dcs15], components: [buton]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "evet") {
          const embedd = new Discord.MessageEmbed()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("RED")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
   
      message.member.setNickname(`[AFK] ${message.member.displayName}`).catch(err => message.channel.send(`Kurucu olduğun için ismini değiştiremiyorum!`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
      db.set(`afktag_${message.author.id}`, message.member.displayName);
      let dcs16 = new MessageEmbed()
        .setTitle(`Godzilla - Afk Sistemi!`)
        .setDescription(`Başarıyla Afk Oldun!`)
        .setColor("GREEN")
       
      message.channel.send({embeds: [dcs16]})
        msg.delete()
        db.set(`afk_${kullanıcı.id}`, sebep);
        db.set(`afk_süre_${kullanıcı.id}`, Date.now());  
    }
    

   
    
    if (interaction.customId == "eve") {
      const embedd = new Discord.MessageEmbed()
      .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
      .setColor("RED")
      if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
      db.delete(`afk_${kullanıcı.id}`, sebep);
      db.delete(`afk_süre_${kullanıcı.id}`, Date.now());
const embed = new MessageEmbed()
.setTitle(":white_check_mark: Başarılı!")
.setDescription("İşlem Başarıyla İptal Edildi!")
.setColor("GREEN")
      message.channel.send({embeds: [embed]});
      msg.delete()
    };
});
  
})

}



}
