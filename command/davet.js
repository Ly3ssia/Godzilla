const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = {
    name: 'davet',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
const embed = new MessageEmbed()
.setTitle("Godzilla - Davet")
.setDescription("Aşağıda ki butonlardan beni ekleyebilirsin!")
.setColor("RED")
.setFooter("Godzilla")

const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("0 Perm")
.setURL("https://discord.com/oauth2/authorize?client_id=944716711754612746&scope=bot&permissions=0")
.setStyle("LINK"),
 new MessageButton()
.setLabel("8 Perm")
.setURL("https://discord.com/oauth2/authorize?client_id=944716711754612746&scope=bot&permissions=8")
.setStyle("LINK"))
message.channel.send({embeds: [embed], components: [row]})
}
}
