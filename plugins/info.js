let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Creator By :
┃• Yahya17
┃
┃> Sosial Media :
┃• Youtube: [https://youtube.com/channel/UCYZ3s2hcv-3uYuR-BuO6wqg]
┃• Istagram: [https://instagram.com/yahya17_ch]
┃• Grup Wa: [https://chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH]
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat:* [085784715971]
┣➥ *Dana:* [085784715971]
┣➥ *Gopay:* [085784715971]
┣➥ *Shopeepay:* [085784715971]
┣➥ *Ovo:* [085784715971]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6285784715971*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YAHYA17BOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
