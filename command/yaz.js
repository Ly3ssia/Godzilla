const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js')

module.exports = {
    name: 'yaz',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle(":x: Başarısız!")
    .setDescription("Bu komutu kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olmalısın!")
    .setColor("RED")
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [embed]});
let prefix = "g!"
    let tit = message.content.slice(prefix.length + 'yaz'.length);
    const embed2 = new MessageEmbed()
    .setTitle(":x: Başarısız!")
    .setDescription("Doğru kullanım: \ng!yaz Başlık ++ Açıklama ")
    .setColor("RED")
        if(!tit.includes("++")) return message.reply({embeds: [embed2]})
        let tit2 = tit.split('++');
 
let embed3 = new MessageEmbed()
.setTitle(tit2[0])
.setDescription(tit2.slice(1).join(" "))
.setFooter('Godzilla -' + tit2[0])
.setColor("RANDOM")



       message.channel.send({embeds: [embed3]})
 
}  
}