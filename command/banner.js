const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const ayarlar = require("../config.json")
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: 'banner',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
let sprefix = db.fetch(`prefix_${message.guild.id}`)
let prefix = sprefix || ayarlar.prefix

    if(!args[0]) args[0] = message.author.id
    let member = args[0].toString().replace(/[+<+@+!+>]/g, "")
    if(isNaN(member)) return message.reply({content: `**Doğru kullanım:** \`${prefix}banner @etiket/id\``}).then(msg => {setTimeout(() => {msg.delete()}, 5000)})
    client.users.fetch(member, {cache: false, force: true}).then(x => {
        const row = new MessageActionRow()
        .addComponents( 
            new MessageButton()
            .setStyle("SECONDARY")
        .setLabel('Avatar')
        .setEmoji("869707733685927936")
        .setCustomId('avat'))
        const embed = new MessageEmbed()
        .setColor(x.hexAccentColor)
        .setImage(x.bannerURL({dynamic: true, size: 4096}))
                 
let embedd = new MessageEmbed()

.setImage(x.displayAvatarURL({dynamic: true, size: 128}))
.setColor("RANDOM")
        if(x.banner !== null) {
            
           
           
            message.reply({embeds: [embed], components: [row]}).then(radio => {
                radio.createMessageComponentCollector(user => user.clicker.user.id == interaction.author.id).on('collect', async (button) => {
                    let interaction = button
            
            if (interaction.customId == "avat") {
                const embedd = new Discord.MessageEmbed()
                .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
                .setColor("RED")
                if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
                radio.edit({embeds: [embedd], components: []})
            }
        })
    })
        } else if(x.accentColor !== null) {
           
            message.reply({content: "Bu Kullanıcının Banneri Yok!"})
        } else return message.reply({content: `Bu Kullanıcının Banneri Yok!`})
   
   
    })
   
}
        }
    


