const { Client, Invite } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'inviteDelete',
    async execute(client, guildInvite) {
    if(!guildInvite.guild.available || guildInvite.guild.id !== require('../config.json').serverID) return;
    db.delete(`invites.${guildInvite.code}`);
}
}