const Discord = require('discord.js');


module.exports = {
    name: 'ping',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel("Güncelle")
.setStyle("PRIMARY")
.setCustomId("guq")

)
    message.channel.send({content: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS', components: [row]}).then(radio => {
   


        radio.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
            let interaction = button
              if (interaction.customId == "guq") {
           radio.edit({content: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS', components: []})
            }  
            })
})
}
}
