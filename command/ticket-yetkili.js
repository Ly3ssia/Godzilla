const Discord = require('discord.js');
  const db = require("croxydb")

 
  module.exports = {
    name: 'ticket-yetkilisi',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, button, args) {

    if(!button.member.permissions.has("ADMINISTRATOR")) return button.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor!")


      let role = button.mentions.roles.first();
      if (!role)
        return button.reply("**Bir Destek Ekibi Rolü Etiketlemen Gerek!**").catch(() => {})
     
  
          button.react("✅")


.then(async (cs) => {
  db.set("destek" + button.guild.id, {
    rolID: role.id
  });
    }).catch(() => {})
  
  
  
}
  }
  