const {MessageAttachment} = require('discord.js');
var Jimp = require('jimp');

module.exports = {
    name: 'hapishane',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

  var user = message.mentions.users.first() || message.author


  const bg = await Jimp.read(user.displayAvatarURL({ format: 'png' }));
  bg.resize(295, 295)
  bg.greyscale()
  bg.gaussian(1)

  const userimg = await Jimp.read("https://media.discordapp.net/attachments/552249354002628619/554073124279156748/prison_PNG29.png?width=300&height=300")
userimg.resize(295, 295)
bg.composite(userimg, 0, 0).write(`./img/hapishane/${user.id}.png`);

  setTimeout(function () {
    message.channel.send({ files: [new MessageAttachment(`./img/hapishane/${user.id}.png`)] }).catch(e => { })
  }, 1000)

    }
}