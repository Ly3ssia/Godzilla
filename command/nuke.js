const Discord = require("discord.js");


module.exports = {
  name: 'nuke',
  usage: '',
  category: "",
  description: ``,
  async execute(client, message, args) {

if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("`Bu Komutu Kullanmak İçin Kanalları Yönet Yetkisine Sahip Olmalısın!`");
message.channel.clone({position: message.channel.position});
message.channel.delete();

}
}