const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js")


module.exports = {
    name: 'oylama',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle(":x: Başarısız!")
        .setDescription(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
        .setColor("RED")
        if (!message.member.permissions.has("MANAGE_GUILD"))
          return message.channel.send({embeds: [embed]})
let mesaj =  args.slice(0) .join(" ")
if(!mesaj) return message.reply("Ne Oylaması Yapmak İstiyorsun?")

let evet = new MessageButton()
.setStyle("SUCCESS")
.setLabel("(0) Evet")
.setCustomId("evet_oylama")
let hayır = new MessageButton()
.setStyle("DANGER")
.setLabel("(0) Hayır")
.setCustomId("hayır_oylama")

let expert = new MessageEmbed()
.setTitle("Godzilla - Oylama Sistemi!")
.setDescription("> "+ mesaj)

.setColor("GREEN")

message.channel.send({embeds: [expert], components: [new MessageActionRow({ components:  [evet, hayır] })] })

}
}
