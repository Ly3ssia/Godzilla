const { MessageEmbed }= require("discord.js");
module.exports = {
    name: 'ara-155',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

    const EmbedSowwyzCode = new MessageEmbed()

    .setTitle(':police_car:'+ message.author.username + " Polis Geliyor!!")
    .setColor("RANDOM")
    .setTimestamp()
    .setImage(
      "http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif"
    );

    return message.channel.send({embeds: [EmbedSowwyzCode]});
  }
}