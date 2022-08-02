const { MessageEmbed } = require('discord.js')
const db = require('croxydb')

module.exports = {
    name: 'snipe',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
   
    const as = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!as) {
    const embed2 = new MessageEmbed()
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`RANDOM`)
    message.channel.send({embeds: [embed2]});
          } else {
  let kullanıcı = client.users.cache.get(as);
  const ds = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setDescription(`Silen: ${kullanıcı}\nSilinen mesaj: ` + ds)
.setColor(`RANDOM`)
  message.channel.send({embeds: [embed]}) 
}
}
}