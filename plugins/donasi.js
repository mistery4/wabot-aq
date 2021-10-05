let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083877914381]
│ • Telkomsel [081290249458]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [083877914381]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
