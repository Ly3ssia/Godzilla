const {Client, Collection, Intents, MessageEmbed, MessageButton, MessageActionRow} = require('discord.js');
const Discord = require("discord.js")
const {readdirSync } = require('fs')
const path = require('path');
const data = require("croxydb")

const client = new Client({ intents: ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"], partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "USER"] });
 const db = require("croxydb")
 const canvas = require("canvas")
 
const config = require('./config.json');

client.login(config.token);
client.commands = new Collection();



const commandFiles = readdirSync('./command').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./command/${file}`);
	client.commands.set(command.name, command);
	}


  client.sendError = (msg, content) => {
    return msg.reply({ content: `🧐 - **${content}**`, components: [] });
}; client.editError = (msg, content) => {
    return msg.edit({ content: `🧐 - **${content}**`, components: [] });
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute( client, ...args));
	}
}

client.on("guildMemberAdd", async member => {
  const cdb = require("croxydb");
  let ototag = await cdb.get(`ototag_${member.guild.id}`);
 

  if (ototag) return member.setNickname(`${ototag}`)

}
)
{
  const { MessageButton, MessageActionRow } = require("discord.js")
  const edb = require("croxydb")
  client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  
  let user = edb.get(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`) 
  
  if(interaction.customId == "evet_oylama") {
  if(!user) {
  edb.add(`oylamaEVET_${interaction.message.id}`, 1)
  
  let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
  let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"
  
  let evet = new MessageButton()
  .setStyle("SUCCESS")
  .setLabel(`(${dataEvet}) Evet`)
  .setCustomId("evet_oylama")
  let hayır = new MessageButton()
  .setStyle("DANGER")
  .setLabel(`(${dataHayır}) Hayır`)
  .setCustomId("hayır_oylama")
  
  interaction.message.edit({components: [new MessageActionRow({ components:  [evet, hayır] })]})
  
  edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
  }
  
  interaction.deferUpdate();
  }
  
  if(interaction.customId == "hayır_oylama") {
  if(!user) {
  edb.add(`oylamaHAYIR_${interaction.message.id}`, 1)
  
  let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
  let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"
  
  let evet = new MessageButton()
  .setStyle("SUCCESS")
  .setLabel(`(${dataEvet}) Evet`)
  .setCustomId("evet_oylama")
  let hayır = new MessageButton()
  .setStyle("DANGER")
  .setLabel(`(${dataHayır}) Hayır`)
  .setCustomId("hayır_oylama")
  
  interaction.message.edit({ components: [new MessageActionRow({ components:  [evet, hayır] })] })
  
  edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
  }
  
  interaction.deferUpdate();
  }
  
  })
  }
client.on('guildMemberAdd', member => {
  const rdb = require('croxydb')
  let sistem = rdb.fetch(`otorol_${member.guild.id}`)
  if(sistem === 'acik'){

    let rol = rdb.fetch(`orol_${member.guild.id}`)
    let kanal = rdb.fetch(`okanal_${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`Üye: ${member.user.username}\nRol: <@&${rol}>\nKanal: <#${kanal}>`) 
    .setColor("RED")
    .setTitle(":white_check_mark: Başarılı!")
                                                             
    client.channels.cache.get(kanal).send({embeds: [embed]})
    
    member.roles.add(rol)

    
  } else if(sistem != "acik") {
    
    return;
  }
})

client.on("ready", async () => {
  const moment = require("moment"); //bu satırda hata verir ise bu satırı silin
  require("moment-duration-format");
  moment.locale("tr");
  const cdb = require("croxydb");
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;

    if (!interaction.customId.startsWith("giveaways-")) return;
      let giveawayID = interaction.customId.split("-")[1];
      let msgID = cdb.get(`giveaway_${giveawayID}`);
      let guild = interaction.guild
      let channel = interaction.channel

     

      let userId = interaction.user.id;
      
          const lyvalue1 = cdb.get(`gwUsers_${msgID}`)
          if(!lyvalue1) {
            cdb.push(`gwUsers_${msgID}`, userId);
            let kazanan2111 = cdb.get(`gwUsers_${msgID}`).length;
            await interaction
        .reply({ content: `Başarıyla çekilişe katıldın.**(${kazanan2111})**`, ephemeral: true })
          } else if(lyvalue1.includes(userId)) {
            let kazanan211 = cdb.get(`gwUsers_${msgID}`).length;
            cdb.unpush(`gwUsers_${msgID}`, userId);
            interaction.reply({ content: `Başarıyla çekilişten ayrıldın. ` , ephemeral: true })
          } else {
            cdb.push(`gwUsers_${msgID}`, userId);
            let kazanan21 = cdb.get(`gwUsers_${msgID}`).length;
            await interaction
        .reply({ content: `Başarıyla çekilişe katıldın.**(${kazanan21})**`, ephemeral: true })
          }
          
      });


      setInterval(async () => {
        client.guilds.cache.map(async (guild) => {
          guild.channels.cache.map(async (channel) => {
            let dataxx = cdb.get(`cekilis.${guild.id}_${channel.id}`);
            if(!dataxx) return;
            dataxx.forEach(async (data) => {
              let giveawayID = data.gwid
              let msgID = cdb.get(`giveaway_${giveawayID}`);
              let time = Date.now() - data.zaman;
              let sure = data.sure;
              let kanal = guild.channels.cache.get(data.kanalid);
  if (time >= sure) {
    if(cdb.get(`cekilis.${giveawayID}`) == "disabled" ) return;
    let win = client.channels.cache.get(data.kanalid);
    if (win) {
      let dataaa = cdb.get(`gwUsers_${msgID}`);
      if (!dataaa) return  cdb.delete(`cekilis.${guild.id}_${channel.id}_${giveawayID}`);

              // 
      let toplam = data.toplam;

      let won = [];
      let winner = [];

      for (let i = 0; i < toplam; i += 1) {
        let kazanan = cdb.get(`gwUsers_${msgID}`)[
          Math.floor(Math.random() * cdb.get(`gwUsers_${msgID}`).length)
        ];
        if (!winner.map((cs) => cs).includes(kazanan)) winner.push(kazanan);
      }
      let kazanan = cdb.get(`gwUsers_${msgID}`)[
        Math.floor(Math.random() * cdb.get(`gwUsers_${msgID}`).length)
      ];
      let kazanan2 = cdb.get(`gwUsers_${msgID}`).length;
      kanal.messages.fetch(data.mesajid).then(async (mesaj) => {
       const row = new Discord.MessageActionRow()
       .addComponents(
        new Discord.MessageButton()
        .setLabel("Reroll")
        .setStyle("SUCCESS")
        .setCustomId("reroll-"+giveawayID)
       )
        let sd = new Discord.MessageEmbed()
          .setTitle(data.odul)
          .setColor("BLURPLE")
          .setTimestamp().setDescription(`
Sona Erdi: <t:${Math.floor(Date.now() /1000)}:R> (<t:${Math.floor(Date.now() /1000)}:f>)
Düzenleyen: **<@${data.hosted}>**
Kazanan: **<@${winner.join(">, <@>") || ""}>** 
Katılımcı: ${kazanan2}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
        mesaj.edit({ embeds: [sd], components: [row] })
    
      if (winner.join(", ")) {
        kanal.send(`**<@${winner}>** Tebrikler **${data.odul}** Kazandın!`);
        cdb.set(`cekilis.${giveawayID}`, "disabled")
      } else {
     cdb.delete(`cekilis.${giveawayID}`, "disabled")
        cdb.delete(`gwUsers_${msgID}`)
        let sd = new Discord.MessageEmbed()
        .setTitle(data.odul)
        .setColor("BLURPLE")
        .setTimestamp().setDescription(`
Sona Erdi: <t:${Math.floor(Date.now() /1000)}:R> (<t:${Math.floor(Date.now() /1000)}:f>)
Düzenleyen: **<@${data.hosted}>**
Kazanan: Bilinmiyor. 
Katılımcı: 0⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
mesaj.edit({embeds: [sd], components: []})

      }
      })
    };
    
 
    }
  
  }
          );
        });
        });
}, 5000);

client.on("interactionCreate", async (interaction) => {

  const cdb = require("croxydb");
  if (!interaction.isButton()) return;
  if (interaction.customId.startsWith("reroll-")) {
    let giveawayID = interaction.customId.split("-")[1];
    let msgID = cdb.get(`giveaway_${giveawayID}`);
    let guild = interaction.guild;
    let channel = interaction.channel;
    let data = cdb.get(`cekilis.${guild.id}_${channel.id}_${giveawayID}`);
        

    let kazanan = cdb.get(`gwUsers_${msgID}`)[
      Math.floor(Math.random() * cdb.get(`gwUsers_${msgID}`).length)
    ]
    let kazanan2 = cdb.get(`gwUsers_${msgID}`).length;

    console.log(
      "debug 1 triggered: ",
      cdb.get(`reroll_${msgID}_${giveawayID}`)
    );
    console.log("debug 2 trigger", giveawayID, msgID);
    if(interaction.user.id !== data.hosted) return interaction.reply({content: `Bu butonu sadece çekilişi düzenleyen (<@${data.hosted}>) kullanabilir`, ephemeral: true})
   interaction.reply({content: "Yeni Kazanan Başarıyla Seçildi!", ephemeral: true})
    interaction.channel.send({content: `Tebrikler <@${kazanan}> Yeni Kazanan Sensin!` });
    
  
  }
});


});//dün gece bana attığın aynısı hiç bir şey değişmeyen kod
client.on("message", async message => {

  const cdb = require("croxydb");

  if (await cdb.fetch(`afk_${message.author.id}`)) {
 
	
    cdb.delete(`afk_${message.author.id}`);
    cdb.delete(`afk_süre_${message.author.id}`);
    message.member.setNickname(cdb.fetch(`afktag_${message.author.id}`)).catch(err => message.channel.send(`Kurucu olduğun için ismini değiştiremiyorum!`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)

    const afk_cikis = new MessageEmbed()
    .setTitle("Godzilla - AFK Sistemi!")    
    .setColor("RED")
      .setDescription(
        `**<@${message.author.id}>**, AFK olmaktan çıktı!`
      );
    message.channel.send({embeds: [afk_cikis]});
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await cdb.fetch(`afk_${kullanıcı.id}`);

  if (sebep) {
    let süre = await cdb.fetch(`afk_süre_${kullanıcı.id}`);
    let zaman = csms(Date.now() - süre);

    const afk_uyarı = new MessageEmbed()
    .setTitle("Godzilla - AFK Sistemi!")  
    .setColor("RED")
      .setDescription(
        ` <@${kullanıcı.id}> Adlı Kullanıcı \`${sebep}\` Sebebiyle AFK Modunda!`
      );
    message.reply({embeds: [afk_uyarı]});
  }
});

client.on('interactionCreate', interaction => {
  
  let buton = db.fetch(`buton_${interaction.guild.id}`)

  
  const e = new MessageEmbed()
  .setColor("2F3136")
  .setDescription(":white_check_mark: Rolün başarıyla verildi.")
  
  
  const t = new MessageEmbed()
  .setColor("2F3136")
  .setDescription(":white_check_mark: Rolün başarıyla alındı.")
  
    if (interaction.isButton()){
  if(interaction.customId === 'buton') {
  if(!interaction.member.roles.cache.has(buton)) { 
    
interaction.member.roles.add(buton)
interaction.reply({embeds: [e], ephemeral: true})
  } else {
    interaction.member.roles.remove(buton)
    interaction.reply({embeds: [t], ephemeral: true})
  }
}

}

    
});  

client.on("guildMemberAdd", async member => {
  const cdb = require("croxydb")
  let botrol = await cdb.fetch(`bototorol_${member.guild.id}`)
  if(botrol){
  let botrol2 = member.guild.roles.cache.get(botrol);
  if (botrol2){
    if (botrol) {
      if (member.user.bot) {
        member.roles.add(botrol2)   
      }}}}
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 7) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(`${msg.member}, Fazla Capslock Kullandın!`)
              
          }
        }
      }
    }
  }
});
client.on('messageDelete', message => {

  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)

})

client.on("messageUpdate", async (oldMessage, newMessage, message) => {
  let modlog = await db.fetch(`log_${oldMessage.guild.id}`);

  if (oldMessage.author.bot) return;
  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

    .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

    .addField("**Eylem:**", "Mesaj Düzenleme")

    .addField(
      "**Mesajın sahibi:**",
      `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`
    )

    .addField("**Eski Mesajı:**", `${oldMessage.content}`)

    .addField("**Yeni Mesajı:**", `${newMessage.content}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`,
      oldMessage.guild.iconURL()
    )

    .setThumbnail(oldMessage.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("channelCreate", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_CREATE" })
    .then(audit => audit.entries.first());

  let kanal;

  if (channel.type === "text") kanal = `<#${channel.id}>`;

  if (channel.type === "voice") kanal = `\`${channel.name}\``;

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username)

    .addField("**Eylem:**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal:**", `${kanal}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconUR);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("channelDelete", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("roleCreate", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Oluşturma")

    .addField("**Rolü Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("roleDelete", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Silme")

    .addField("**Rolü Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("emojiCreate", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Oluşturma")

    .addField("**Emojiyi Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("emojiDelete", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Silme")

    .addField("**Emojiyi Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Emoji:**", `${emoji}`)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

  if (!modlog) return;

  const entry = await oldEmoji.guild
    .fetchAuditLogs({ type: "EMOJI_UPDATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Güncelleme")

    .addField("**Emojiyi Güncelleyen Kişi:**", `<@${entry.executor.id}>`)

    .addField(
      "**Güncellenmeden Önceki Emoji:**",
      `${oldEmoji} - İsmi: \`${oldEmoji.name}\``
    )

    .addField(
      "**Güncellendikten Sonraki Emoji:**",
      `${newEmoji} - İsmi: \`${newEmoji.name}\``
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`,
      oldEmoji.guild.iconURL
    )

    .setThumbnail(oldEmoji.guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("guildBanAdd", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasaklama")

    .addField("**Kullanıcıyı Yasaklayan Yetkili:**", `<@${entry.executor.id}>`)

    .addField("**Yasaklanan Kullanıcı:**", `**${user.tag}** - ${user.id}`)

    .addField("**Yasaklanma Sebebi:**", `${entry.reason}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});

client.on("guildBanRemove", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasak Kaldırma")

    .addField("**Yasağı Kaldıran Yetkili:**", `<@${entry.executor.id}>`)

    .addField(
      "**Yasağı Kaldırılan Kullanıcı:**",
      `**${user.tag}** - ${user.id}`
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send({embeds: [embed]});
});            

client.on("messageCreate", async message => {
  if (!message.guild) return;
  let sistem = db.fetch(`emoji_${message.guild.id}`)
  if(!sistem) return;
   
   if(message.channel.id === sistem.kanal) {
     if(message.author.bot) return;
     
     
     message.react(`${sistem.e1}`).catch(err => console.log(`Hata oluştu`))
     message.react(`${sistem.e2}`).catch(err => console.log(`Hata oluştu ${err}`) ? message.channel.send("Bu emoji bu sunucuda ekli değil!") :  null)
   } else {
     return;
   }
   
 });
 

 client.on("message", async message => {
  if (!message.guild) return;
  let chattt = await db.fetch(`fotochat_${message.guild.id}`);
  if (message.channel.id !== chattt) {
    return;
  }
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    if (message.attachments.size < 1) {
      message.delete()
    message.author.send("Bu kanalda sadece fotoğraf paylaşılabilir.").catch(err => console.log(`Hata oluştu ${err}`) ? console.log("Bu emoji bu sunucuda ekli değil!") :  null)
    }
  }
});

client.on("guildMemberRemove", async member => {
  if (db.fetch(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

 
  

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/951500999971979294/955468811862159470/20220321_171144.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.tag}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "bb.png"
  );

    canvaskanal.send(attachment);
   
});

client.on("guildMemberAdd", async member => {
  if (db.fetch(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");



  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
 

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/951500999971979294/955467936863223828/20220321_170805.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.tag}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "hg.png"
  );

  canvaskanal.send(attachment);
 
});
