const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'dolar',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  

  const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let embed = new MessageEmbed()
.setTitle("Godzilla - Dolar Kuru Yükleniyor!")
.setDescription("Dolar kuru yükleniyor..")
.setColor("RED")

const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("Güncelle")
.setCustomId("güncelle")
.setStyle("PRIMARY"))
message.channel.send({embeds: [embed]}).then(async msg => {    
setTimeout(() => {
    csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
if (dolarobj.SATIS){
  let embed2 = new MessageEmbed()
  .setTitle("Godzilla - Güncel Dolar")
  .setDescription(`Güncel Dolar Kuru: **${dolarobj.SATIS}TL**`)
 .setColor("RED")
 .setImage("https://media-cdn.t24.com.tr/media/library/2021/10/1633892793251-baris-soydan.png") 
 msg.edit({embeds: [embed2], components: [row]}).then(radio => {
    radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
        let interaction = button

if (interaction.customId == "güncelle") {
    let embed3 = new MessageEmbed()
    .setTitle("Godzilla - Güncel Dolar")
    .setDescription(`Güncel Dolar Kuru: **${dolarobj.SATIS}TL**`)
   .setColor("RED")
   .setImage("https://media-cdn.t24.com.tr/media/library/2021/10/1633892793251-baris-soydan.png") 
radio.edit({embeds: [embed3], components: []})
}
    })
})
      } else {
        
      }
})
}, 2000)
  })
}
}
