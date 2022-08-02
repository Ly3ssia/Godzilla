const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const config = require('../config.json');
const db = require('croxydb');
moment.locale('tr');


module.exports = {
    name: 'emoji-bilgi',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
            let prefix = await db.fetch(`prefix_${message.guild.id}`) || config.prefix
            const lsda =  new MessageEmbed()
            .setColor('RED')
            .setDescription("Lütfen bir emoji belirt!")
            .setTitle("Godzilla - Emoji Bilgi!")
if(!args[0]) return message.channel.send({embeds: [lsda]})

  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
    const sd = new MessageEmbed()
    .setColor('RED')
    .setDescription("Lütfen bir emoji belirt!")
    .setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true }))
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send({embeds: [sd]}
   );
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('Bilgisini vermem için **bu sunucuda** olan bir emojiyi göndermeli veya adını yazmalısınız. Örnek; `${prefix}bilgi emoji`')
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();
  const asd = new MessageEmbed()
  .setColor("RED")
  .setAuthor('Godzilla - Emoji Bilgi!')
  .addField("ID", emoji.id, true)
  .addField('Hareketli mi?', emoji.animated ? '\`Evet\`' : '\`Hayır\`', true)
  .addField('Eklenme Tarihi', moment(emoji.createdAt).format('DD')+' '+moment(emoji.createdAt).format('MM').toString()
  .replace('01', 'Ocak')
  .replace('02', 'Şubat')
  .replace('03', 'Mart')
  .replace('04', 'Nisan')
  .replace('05', 'Mayıs')
  .replace('06', 'Haziran')
  .replace('07', 'Temmuz')
  .replace('08', 'Ağustos')
  .replace('09', 'Eylül')
  .replace('10', 'Ekim')
  .replace('11', 'Kasım')
  .replace('12', 'Aralık')+' '+moment(emoji.createdAt).format('YYYY'), true)
  .addField('Kullanım', `\`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>\``, true)
  .addField('Ekleyen Kişi', '<@!'+author.id+'>', true)
  .addField('Bağlantı', '[Buraya tıkla]('+emoji.url+')', true)
  .setThumbnail(emoji.url)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true }))
  return message.channel.send({embeds: [asd]});



}
}