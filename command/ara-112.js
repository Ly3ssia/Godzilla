const { MessageEmbed }= require("discord.js");
module.exports = {
    name: 'ara-112',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

    const EmbedSowwyzCode = new MessageEmbed()

    .setTitle(':ambulance: '+ message.author.username + " Ambulans Geliyor!!")
    .setColor("RANDOM")
    .setTimestamp()
    .setImage(
      "https://www.hareketligifler.net/data/media/937/ambulans-hareketli-resim-0012.gif"
    );

    return message.channel.send({embeds: [EmbedSowwyzCode]});
  }
}