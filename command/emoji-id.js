const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const config = require('../config.json');
const db = require('quick.db');
moment.locale('tr');

module.exports = {
    name: 'emoji-id',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
            let prefix = await db.fetch(`prefix_${message.guild.id}`) || config.prefix
            
if(!args[0]) return message.channel.send("Lütfen bir emoji belirt!")


  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return  message.channel.send("Lütfen bir emoji belirt! (Eğer Belirtmene Rağmen Bunu Görüyorsan Belirtilen Emoji Bu Sunucuda değildir!)")
 
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('Belirtilen emoji bu sunucuda değil!')
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();
  return message.channel.send(emoji.id)
 


}
}