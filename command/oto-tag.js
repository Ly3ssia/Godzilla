const Discord = require("discord.js");
const db = require("croxydb")


module.exports = {
    name: 'oto-tag',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

  if (!message.member.permissions.has("MANAGE_GUILD"))return message.channel.send(
    "Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olman gerekiyor."
  );
let asd = new Discord.MessageEmbed()
.setDescription("Oto Tag Ayarlamak için Bir Tag Yazmalısın! `g!oto-tag <tagınız> `")
.setColor("RED")
.setTitle(":x: Başarısız!")

  let mesaj = args.join(" ");
  if (!mesaj)
    return message.channel.send({embeds: [asd]})
     
    const embed =  new Discord.MessageEmbed()
    .setDescription(`Oto Tag  \`${mesaj}\` Olarak Ayarlanmıştır!`)
    .setColor("RED")
    .setTitle("✅ İşlem Başarılı!")
  const row = new Discord.MessageActionRow()
  .addComponents(
new Discord.MessageButton()
    .setStyle("DANGER")
.setLabel("Sıfırla!")
.setCustomId('A'))
  await db.set(`ototag_${message.guild.id}`, mesaj);
  message.channel.send({embeds: [embed], components: [row]}).then(radio => {
   


    radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
        let interaction = button
          if (interaction.customId == "A") {
      db.delete(`ototag_${message.guild.id}`, mesaj);
     radio.delete()
     message.channel.send("Sistem Başarıyla Sıfırlandı!")
    }
})
})
}}