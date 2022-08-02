const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: 'belge',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
const embed = new MessageEmbed()
    .setTitle("Yapılandırılıyor..")
    .setDescription("Bakıyorum bekle kardeşim!")
    .setColor("RANDOM")
   message.channel.send({embeds: [embed]}).then(message => {

    var espriler = ['SiktirName' ,'Takdir' ,'Onur Belgesi' ,'Teşekkür' ,'Sınıfta Kaldın!'];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    const embed2 = new MessageEmbed()
   .setDescription("Aşağıda ki butonda belgen yazıyor :flushed:")
   .setColor("RANDOM")
   const row = new MessageActionRow()
        .addComponents( 
            new MessageButton()
   .setStyle("SECONDARY")
   .setLabel(`${espri}`)
   .setCustomId("A")
   .setDisabled(true))
   message.edit({embeds: [embed2], components: [row]});
});
}

}
