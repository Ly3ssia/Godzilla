const Discord = require('discord.js');
  const { MessageEmbed } = require("discord.js") 
  const config = require("../config.json")
 let prefix = config.prefix
  module.exports = {
    name: 'yardım',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

   const yardım = new MessageEmbed()
   .setTitle("Godzilla - Destek Yardım!")
   .addField(`${prefix}ticket-yetkilisi`, "Ticket Yetkilisi Ayarlarsın!")
   .addField(`${prefix}ticket-menü`, "Ticket Menüsünü Ayarlarsın!")
   .setColor("RED")
  message.channel.send({embeds: [yardım]})
}
  }
  
