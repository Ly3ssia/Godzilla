const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
moment.locale('TR')

module.exports = {
    name: 'kullanıcı-id',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args, con) {

        const member = message.mentions.members.first() || message.member
       
      
    
        message.channel.send(`${member.id}`)
    }
}