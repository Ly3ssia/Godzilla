const {MessageActionRow, MessageSelectMenu} = require('discord.js')
const db = require("croxydb")
module.exports = {
    name: 'ticket-menü',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
	if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor!")
	    let emoji = args[0]
	if (!emoji) return message.channel.send("Lütfen 1. emojiyi gir!")
	let emoji2 = args[1]
	if (!emoji2) return message.channel.send("Lütfen 2. emojiyi gir!")
	let emoji3 = args[2]
	if (!emoji3) return message.channel.send("Lütfen 3. emojiyi gir!")
		let menu1 = args[3]
		
		if (!menu1) return message.channel.send("1. Menü Yazısını Yaz!");
		
		let menu2 = args[4]
		
		if (!menu2) return message.channel.send("2. Menü Yazısını Yaz!");
		
		let menu3 = args[5]
		
		if (!menu3) return message.channel.send("3. Menü Yazısını Yaz!");
		 let mesaj = args.slice(6).join(" ")
		if (!mesaj) return message.channel.send("Embed Mesaj Yazısını Yaz!")
  let hm = await db.get("destek"+ message.guild.id)
  if(!hm) return message.channel.send('Destek Rolü Ayarlamadan Menüyü Göremezsin :D?')
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Bir bilet türü seçin!')
					.addOptions([
						{
							label: `${menu1}`,
							description: `Bir ${menu1} bileti açın.`,
							value: 'menu1',
							emoji: `${emoji}`,
						},
						{
							label: `${menu2}`,
							description: `Bir ${menu2} bileti açın.`,
							value: 'menu2',
							emoji: `${emoji2}`
						},
                        {
							label: `${menu3}`,
							description: `Bir ${menu3} bileti açın.`,
							value: 'menu3',
							emoji: `${emoji3}`,
						},
					]),
			);
		
        message.channel.send({
            embeds: [{
                title: 'Godzilla - Destek Sistemi!',
                description:  `${mesaj}`,
                color: "RED"
              
            }],
            components: [row]
			
        })
    }
}


