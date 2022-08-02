const { MessageEmbed }= require("discord.js");
module.exports = {
    name: 'ara-110',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

    const EmbedSowwyzCode = new MessageEmbed()

      .setTitle(':fire_engine:  '+ message.author.username + " İtfaiye Geliyor!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(
        "https://www.hareketligifler.net/data/media/1193/itfaiye-arabasi-hareketli-resim-0020.gif"
      );

    return message.channel.send({embeds: [EmbedSowwyzCode]});
  }
}