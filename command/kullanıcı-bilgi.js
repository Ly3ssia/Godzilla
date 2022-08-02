const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
moment.locale('TR')

module.exports = {
    name: 'kullanıcı-bilgi',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args, con) {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: 'Çevrimiçi',
            idle: 'Boşta',
            dnd: 'Rahatsız Etmeyin',
            offline: 'Çevrimdışı'
        }

        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle("Godzilla - Kullanıcı Bilgi")
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('**Kullanıcı adı**', `${member.user.username}#${member.user.discriminator}`) 
        .addField('**Kullanıcı ID**', `${member.id}`)
        .addField('**Hesap Oluşturulma Tarihi**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('**Sunucuya Katılım Tarihi**', `${moment.utc(member.joinedAt).format('LLLL')}`)
      
        .addField('**Rolleri**', `${member.roles.cache.map(role => role.toString())}`, true)
        
        message.channel.send({embeds: [embed]})
    }
}