const { MessageEmbed, Util} = require("discord.js")
  const {
    parse
  } = require("twemoji-parser");
 
module.exports = {
    name: 'emoji-çal',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  
    if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send('Emojileri yönet yetkiniz yok.')
  
    const emoji = args[0];
    const name = args.slice(1).join(" ");
    if (!emoji) {
      const embed = new MessageEmbed()
        .setDescription(`Lütfen bir emoji giriniz!`)
        .setColor('RANDOM')
      return message.channel.send({embeds: [embed]})
    }
  
    try {
      if (emoji.startsWith("https://cdn.discordapp.com")) {
        await message.guild.emojis.create(emoji, name || "give_name");
  
        const embed = new MessageEmbed()
          .setTitle(`Emoji Eklendi!`)
          .setThumbnail(`${emoji}`)
          .setColor("RANDOM")
          .setDescription(
            `Emoji Başarıyla Sunucunuza Eklendi! | İsmi: ${
                  name || "give_name"
                } `
          );
        return message.channel.send({embeds: [embed]});
      }
  
      const customEmoji = Util.parseEmoji(emoji);
  
      if (customEmoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${customEmoji.id}.${
              customEmoji.animated ? "gif" : "png"
            }`;
  
        await message.guild.emojis.create(
          `${link}`,
          `${name || `${customEmoji.name}`}`
        );
  
        const embed = new MessageEmbed()
          .setTitle(`Emoji Eklendi <:${customEmoji.name}:${customEmoji.id}>`)
          .setColor("RANDOM")
          .setThumbnail(`${link}`)
          .setDescription(
            `Emoji sunucuya başarıyla eklendi! | İsmi: ${
                  name || `${customEmoji.name}`
                } | Görünüşü için [buraya tıkla!](${link})`
          );
        return message.channel.send({embeds: [embed]});
      } else {
        const foundEmoji = parse(emoji, {
          assetType: "png"
        });
        if (!foundEmoji[0]) {
          const embed = new MessageEmbed()
            .setDescription(`Lütfen Geçerli Bir Emoji Giriniz!`)
            .setColor('RANDOM')
          return message.channel.send({embeds: [embed]});
        }
        const embed = new MessageEmbed()
          .setDescription(`Cidden bu emojiyi sunucuna mı eklemek isiyorsun? Dostum.. O normal bir emoji`)
          .setColor('RANDOM')
        message.channel.send({embeds: [embed]}
  
        )
      }
    } catch (e) {
      if (
        String(e).includes(
          "DiscordAPIError: Maximum number of emojis reached (50)"
        )
      ) {
        const embed = new MessageEmbed()
          .setDescription(`Sunucunuz maximum emoji sayısına ulaştı!`)
          .setColor('RANDOM')
  
        return message.channel.send({embeds: [embed]})
      }
    }
  }
} 
  
  