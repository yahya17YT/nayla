let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
https://chat.whatsapp.com/Kqio6vednj6EJITkjvUsdG
*GRUP 2*
https://chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
