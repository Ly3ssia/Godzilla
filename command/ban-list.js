const { MessageEmbed }= require('discord.js')

  
module.exports = {
    name: 'ban-list',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
var userlist = message.guild.bans.fetch()
userlist.then(collection => {
if(collection.first() == null){
  
const embed = new MessageEmbed()
.setDescription("Sunucunuzda Banlanan Kimse Yok!")      
.setColor("RED")
.setTitle(":x: Hata!")
message.channel.send({embeds: [embed]})
  
} else {
const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
const embed2 = new MessageEmbed()
.setTitle("Godzilla - Ban List")
.setColor("RED")
.setDescription(data)

message.channel.send({embeds: [embed2]})
}
})
}

}
