const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'emojiler',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

let animEmotes = []
 staticEmotes = [];
message.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}:${x.id}>`);
})
const msg = new MessageEmbed()
.setColor('RED')
.setTitle(`Godzilla - Emoji Sayma Sistemi!`)
.setDescription(`${animEmotes}${staticEmotes}`)
message.reply({embeds: [msg]}).catch(error => {message.reply('Hata Oluştu!')})

    }
}