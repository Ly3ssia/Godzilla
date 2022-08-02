const Discord = require("discord.js");
const db = require("croxydb");
const ms = require("parse-ms");

module.exports = {
    name: 'başlat',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
  let csc = message.channel;
  let cst2 = args[0];

  let csw = args.slice(1).join(" ");

  if (!cst2)
    return message.reply(
      "g!başlat 1s/1m/1h/1d Discord Nitro"
    );
  
  if (!csw)
    return message.reply(
      "g!başlat 1s/1m/1h/1d Discord Nitro"
    );

  let x = message.content;
  let ise = x
    .split(" ")
    .filter((val) => val.match(/\d+/))
    .map((x) =>
      x
        .split("")
        .filter((val) => val.match(/\d+/))
        .join("")
    );

  let sures;
  let cst1 = ise[0];
  let cstss = ise[1];
  if (cst2.includes("s")) sures = cst1 * 1000;
  if (cst2.includes("m")) sures = cst1 * 60 * 1000;
  if (cst2.includes("h")) sures = cst1 * 60 * 60 * 1000;
  if (cst2.includes("d")) sures = cst1 * 24 * 60 * 60 * 1000;

  let zaman = Date.now();

  let sure;
  let data;
  try {
    data = ms(sures);
  } catch (err) {
    message.reply(
      "g!başlat 1s/1m/1h/1d Discord Nitro"
    );
  }
  if (data) {
    let s = data.seconds;
    let m = data.minutes;
    let h = data.hours;
    let d = data.days;
    if (s) {
      sure = `${s} Saniye`;
    }
    if (m) {
      sure = `${m} Dakika`;
    }
    if (h) {
      sure = `${h} Saat`;
    }
    if (d) {
      sure = `${d} Gün`;
    }

    const giveawayID = Date.now().toString(36);

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("")
        .setStyle("PRIMARY")
        .setCustomId("giveaways-" + giveawayID)
        .setEmoji("🎉")
    );
console.log(Date.now())
    let cse = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(csw)
           .setFooter("Godzilla - Çekiliş Sistemi").setDescription(`           
Bitiş: <t:${Math.floor(Date.now() /1000) + Math.floor(sures/1000)}:R> (<t:${Math.floor(Date.now() /1000) + Math.floor(sures/1000)}:f>)
Düzenleyen: **${message.author}**
Kazanan: **1**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
Katılımcı: **Çekiliş Bitince Gösterilicek.**  `);
    csc.send({ embeds: [cse], components: [row] }).then((cs) => {
   db.set(`giveaway_${giveawayID}_${sures}`)
      db.set(`giveaway_${giveawayID}`, cs.id);
      db.push(`asd_${message.guild.id}`, {
       
        hosted: message.author.id,
       
      });
      db.push(`cekilis.${message.guild.id}_${csc.id}`, {
        kanalid: csc.id,
        mesajid: cs.id,
        hosted: message.author.id,
        sure: sures,
        gwid: giveawayID,
        zaman: zaman,
        toplam: 1,
        odul: csw,
      });
      db.set(`cekilis.${message.guild.id}_${csc.id}_${giveawayID}`, {
        kanalid: csc.id,
        mesajid: cs.id,
        hosted: message.author.id,
        sure: sures,
        gwid: giveawayID,
        zaman: zaman,
        toplam: cstss,
        odul: csw,
      });
    });
  }
}
}