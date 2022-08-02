const { Client, Invite } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'inviteCreate',
    async execute(client, guildInvite) {
    if(!guildInvite.guild.available || guildInvite.guild.id !== require('../config.json').serverID) return;
    db.set(`invites.${guildInvite.code}`, {
        inviterId: guildInvite.inviter?.id,
        code: guildInvite.code,
        uses: guildInvite.uses
    });
}
}