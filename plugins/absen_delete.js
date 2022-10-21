let handler = async (m, { usedPrefix }) => {
    let imgr = flaaa2.getRandom()
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, wm, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, `${imgr + 'Delete Absen'}`, [
                ['⫷ ᴍᴜʟᴀɪ ᴀʙsᴇɴ ⫸', `${usedPrefix}mulaiabsen`]
            ], m)
    delete conn.absen[id]
    m.reply(`Absen Berhasil di hapus!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delabsen|delete|hapus)absen$/i
handler.group = true
handler.admin = true
export default handler
