const Discord = require("discord.js")

module.exports = {
    name: 'kanal-id',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
let kanal = message.mentions.channels.first() 

if (!kanal) return message.channel.send("Lütfen bir kanal belirt!")
message.channel.send(kanal.id)

}
}