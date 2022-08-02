const { Client, MessageEmbed, Message } = require('discord.js');
const db = require('quick.db');
const { colors, fromIntToDate } = require('discord-toolbox');
const config = require('../config.json');
const moment = require('moment');

module.exports = {

        name: "invite",
        usage: '',
        category: "",
        description: ``,
        async execute(client, msg, args) {
          let member = args[0] ? msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) : msg.member;
          if(!member || member.user.bot) return client.sendError(msg,("Üye Bulunamadı!"));
      
          if(!db.has(`users.${member.user.id}`)) {
              db.set(`users.${member.user.id}`, {
                  id: member.user.id,
                  joins: [{
                      at: member.joinedAt.setHours(member.joinedAt.getHours() +1),
                      by: undefined,
                      inviteCode: undefined
                  }], bonusHistory: [],
                  invites: {
                      normal: 0,
                      left: 0,
                      fake: 0,
                      bonus: 0
                  }
              })
          }; let user = db.get(`users.${member.user.id}`);
      
          let rank = Object.values(db.get("users"))
              .sort((a,b) => Object.values(b.invites).reduce((x,y)=>x+y) - Object.values(a.invites).reduce((x,y)=>x+y))
      
          let embed = new MessageEmbed()
              .setColor("2F3136")
              .setAuthor("Godzilla - Davet Bilgi!")
              .setDescription(
                  
                  `
                  <@${member.user.id}> Adlı Kullanıcının Daveti!
                   ✅ Gerçek **${user.invites.normal}**
                   ❌ Ayrılan **${user.invites.left}**
                   ✨ Toplam **${Object.values(user.invites).reduce((x,y)=>x+y).toLocaleString()}**
                   💩 Sahte **${user.invites.fake}**`
                  
              )
      .setFooter("NOT: Eğer Bir Üye Ayrılırsa Gerçek Üye İnviteniz Silinmez.")
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
          msg.channel.send({ embeds: [embed] });
      }
    }
  