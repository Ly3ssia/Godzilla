const { Client } = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: 'ready',
    once: true,

    async execute(client, guild) {
        console.log(`Giriş Başarılı!`)
client.user.setActivity("Ticket <3 Ly3ssia")
      
    

    if(!db.has("invites")) db.set("invites", {});
    if(!db.has("users")) db.set("users", {});

console.log("giriş yaptım!")
   
if(!guild) return console.log("Botu sunucunuza eklemediniz!");
try {
    var guildInvites = (await guild.invites.fetch());
} catch {
    return console.log("Botun davetleri görüntüleme izni yok. Lütfen atayın.");
};
  

    guildInvites
        .forEach(i => {
            db.set(`invites.${i.code}`, {
                inviterId: i.inviter?.id,
                code: i.code,
                uses: i.uses
            });
        });
    Object.values(db.get("invites"))
        .filter(i => !guildInvites.has(i.code))
        .forEach(i => db.delete(`invites.${i.code}`))
}

}