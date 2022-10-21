let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'unlock': 'unlocked',
        'lock': 'locked',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
Contoh :*
  *○ ${usedPrefix + command} unlock*
  *○ ${usedPrefix + command} lock*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['groupsetting','gcs']
handler.tags = ['group']
handler.command = /^(gcs|groupsetting)$/i

handler.admin = true
handler.botAdmin = true

export default handler
