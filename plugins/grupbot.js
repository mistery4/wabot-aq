let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
// JANGAN DI UBAH LAH BABI :V
let grupBot = '*「 OFFICIAL BOT GROUP 」*\n\nSini Bang Join\n\n> http://bit.ly/Grupgabutbotv1'
conn.reply(m.chat, grupBot, m)
}
handler.help = ['gcbot', 'botgrup']
handler.tags = ['main']
handler.command = /^(gcbot|grupbot|gc|botgc|botgrup)$/i

module.exports = handler
