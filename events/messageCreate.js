const { MessageEmbed } = require('discord.js');
const ayarlar = require('../config.json');
const db = require('croxydb')
module.exports = {
        name: 'messageCreate',
        async execute(client, message) {
            let sprefix = db.fetch(`prefix_${message.guild.id}`)
            let prefix = sprefix || ayarlar.prefix  
            if (message.author.bot) return
            if (message.channel.type == "DM") return;

            const args = message.content.slice(prefix.length).trim().split(' ')
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName)
    
            if (!message.content.startsWith(prefix) || message.author.bot) return;
            if (!command) return
    

            try {
                command.execute(client, message, args);
                
                } catch (error) {
                     message.channel.send('Hata Oluştu!')
                };
            }
        }