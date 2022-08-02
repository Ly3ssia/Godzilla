const Discord = require("discord.js");
const { Snake } = require("discord-gamecord")
module.exports = {
    name: 'snake',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {

new Snake({
        message: message,
        embed: {
        title: 'Yılan oyunu',
        color: 'AQUA',
        OverTitle: "Oyun bitti.",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Butonları kullanmak için oyunu sen başlatmalısın.',
      }).startGame();
  }
}