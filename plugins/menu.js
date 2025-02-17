const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🍭",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭══〘〘 ${config.BOT_NAME} 〙〙*
*┃❍ ʀᴜɴ : ${runtime(process.uptime())}*
*┃❍ ᴍᴏᴅᴇ* : *${config.MODE}*
*┃❍ ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃❍ ʀᴀᴍ* : *34.56 ɢʙ/60.79*
*┃❍ ᴄʀᴇᴀᴛᴏʀ* : *⿻ 𝐀ɭι̇ι̇ ⿻⃮͛*
*┃❍ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃❍ ᴠᴇʀsɪᴏɴs* : *ᴠ.4.1.0*
*╰═════════════════⊷*
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*├◈ .ғʙ*
*├◈ .ɪɴꜱᴛᴀ*
*├◈ .ᴠɪᴅᴇᴏ*
*├◈ .ɢᴅʀɪᴠᴇ*
*├◈ .ᴛᴡɪᴛᴛᴇʀ*
*├◈ .ᴛᴛ*
*├◈ .ᴍᴇᴅɪᴀғɪʀᴇ*
*├◈ .ᴘʟᴀʏ*
*├◈ .ᴘʟᴀʏ2*
*├◈ .sᴏɴɢ*
*├◈ .ᴠɪᴅᴇᴏ*
*├◈ .ᴠɪᴅᴇᴏ2*
*├◈ .sᴘᴏᴛɪꜰʏ*
*├◈ .ᴠɪᴅᴇᴏ4*
*├◈ .ɪᴍɢ*
*├◈ .Lʏʀɪᴄs*
*├◈ .ᴀᴘᴋ*
*├◈ .ᴅᴀʀᴀᴍᴀ*
*├◈ .ᴘʟᴀʏ2*
*├◈ .ᴘʟᴀʏ4*
*├◈ .ʙᴀɪsᴄᴏᴘᴇ*
*├◈ .ɢɪɴɪsɪsɪʟᴀ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏮EMPIRE ALI🏮* *❒⁠⁠⁠⁠* 
*├◈ .Fᴀᴍɪʟʏ*
*├◈ .Vᴀᴡᴜʟᴇɴᴄᴇ*
*├◈ .ᴄʜᴀɴɴᴇʟ*
*├◈ .sᴜᴘᴘᴏʀᴛ*
*├◈ .ᴇxᴏʀ*
*├◈ .ᴘʀᴏᴍᴏᴛᴇsᴛᴀꜰꜰ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*├◈ .ʏᴛꜱ*
*├◈ .ʏᴛᴀ*
*├◈ .ʟᴏʟɪ*
*├◈ .ᴍᴏᴠɪᴇɪɴғᴏ*
*├◈ .ᴍᴏᴠɪᴇ*
*├◈ .Gᴏᴏɢʟᴇ*
*├◈ .ᴡᴇᴀᴛʜᴇʀ*
*├◈ .sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 GAME-CMD 🎮* *❒⁠⁠⁠⁠* 
*├◈ .ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*├◈ .ʀᴏʟʟ🎲*
*├◈ .ᴄᴏɪɴꜰʟɪᴘ🪙*
*├◈ .pick*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*├◈ .ɢᴘᴛ*
*├◈ .ᴀɪ*
*├◈ .ᴀɴᴀʟʏsᴇ*
*├◈ .ʟʟᴀᴍᴀ3*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*├◈ .ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├◈ .sᴇᴛᴛɪɴɢs*
*├◈ .ᴏᴡɴᴇʀ*
*├◈ .ʀᴇᴘᴏ*
*├◈ .ᴋɪɴɢ*
*├◈ .ꜱʏꜱᴛᴇᴍ*
*├◈ .ꜱᴛᴀᴛᴜꜱ*
*├◈ .Aʙᴏᴜᴛ*
*├◈ .ʙʟᴏᴄᴋ*
*├◈ .ᴜɴʙʟᴏᴄᴋ*
*├◈ .sʜᴜᴛᴅᴏᴡɴ*
*├◈ .ᴄʟᴇᴀʀᴄʜᴀᴛs*
*├◈ .sᴇᴛᴘᴘ*
*├◈ .ʙʀᴏᴀᴅᴄᴀsᴛ*
*├◈ .ᴊɪᴅ*
*├◈ .ɢᴊɪᴅ*
*├◈ .ᴘᴀɪʀ*
*├◈ .sᴀᴠᴇ*
*├◈ .ʀᴀɴᴋ*
*├◈ .ᴄᴀʟᴄ*
*├◈ .ʀᴇꜱᴛᴀʀᴛ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*├◈ .ʀᴇᴍᴏᴠᴇ*
*├◈ .ᴅᴇʟᴇᴛᴇ*
*├◈ .ᴀᴅᴅ*
*├◈ .ᴋɪᴄᴋ*
*├◈ .ᴋɪᴄᴋᴀʟʟ*
*├◈ .sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├◈ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├◈ .ᴘʀᴏᴍᴏᴛᴇ*
*├◈ .ᴅᴇᴍᴏᴛᴇ*
*├◈ .ᴛᴀɢᴀʟʟ*
*├◈ .ɢᴇᴛᴘɪᴄ*
*├◈ .ɪɴᴠɪᴛᴇ*
*├◈ .ʀᴇᴠᴏᴋᴇ*
*├◈ .ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*├◈ .ᴀʟʟʀᴇǫ*
*├◈ .ᴍᴜᴛᴇ*
*├◈ .ᴅᴇʟ*
*├◈ .ᴜɴᴍᴜᴛᴇ*
*├◈ .ʟᴏᴄᴋɢᴄ*
*├◈ .ᴜɴʟᴏᴄᴋɢᴄ*
*├◈ .ʟᴇᴀᴠᴇ*
*├◈ .ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*├◈ .ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*├◈ .ᴊᴏɪɴ*
*├◈ .ʜɪᴅᴇᴛᴀɢ*
*├◈ .ɢɪɴғᴏ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*├◈ .sᴇɴᴅᴅᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*├◈ .ᴀʙᴏᴜᴛ*
*├◈ .Dᴇᴠ*
*├◈ .ᴋɢᴛᴇᴄʜ*
*├◈ .ᴀʟɪᴠᴇ*
*├◈ .ʙᴏᴛɪɴꜰᴏ*
*├◈ .ꜱᴛᴀᴛᴜꜱ*
*├◈ .ᴘɪɴɢ*
*├◈ .ᴘɪɴɢ2*
*├◈ .ꜱʏꜱᴛᴇᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🤖 BOT-CMD 🤖* *❒⁠⁠⁠⁠* 
*├◈ .ᴠᴇʀsɪᴏɴ*
*├◈ .ʀᴇᴘᴏ*
*├◈ .ᴍᴇɴᴜ*
*├◈ .ᴍᴇɴᴜ2*
*├◈ .ᴍᴇɴᴜ3*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*├◈ .sᴛɪᴄᴋᴇʀ*
*├◈ .ᴛʀᴛ*
*├◈ .ᴛᴛs*
*├◈ .ꜰᴀɴᴄʏ*
*├◈ .ᴜʀʟ*
*├◈ .Aɢᴇ*
*├◈ .ᴛɢs*
*├◈ .Cᴏɴᴠᴇʀᴛ*
*├◈ .ᴛɪɴʏ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒*
*├◈ .ᴅᴏɢ*
*├◈ .ᴄᴀᴛ*
*├◈ .ᴀɴɪᴍᴇ*
*├◈ .ᴄᴏᴜᴘʟᴇᴘᴘ*
*├◈ .ꜰɪɴᴅɴᴀᴍᴇ*
*├◈ .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ1*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ2*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ3*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ4*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ5*
*├◈ .ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*├◈ .ɪᴍɢ*
*├◈ .ʟᴏɢᴏ*
*├◈ .ss*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*├◈ .ᴛʀᴛ*
*├◈ .ᴊᴏᴋᴇ*
*├◈ .ꜰᴀᴄᴛ*
*├◈ .ɢɪᴛʜᴜʙ*
*├◈ .ɢᴘᴀꜱꜱ*
*├◈ .ʜᴀᴄᴋ*
*├◈ .ǫᴜᴏᴛᴇ*
*├◈ .ǫʀ*
*├◈ .ꜱʀᴇᴘᴏ*
*├◈ .sʏsᴛᴇᴍ*
*├◈ .ʀᴀɴᴋ*
*├◈ .Tɪᴍᴇᴢᴏɴᴇ*
*├◈ .ᴅᴇꜰɪɴᴇ*
*├◈ .Dᴀɪʟʏꜰᴀᴄᴛ*
*├◈ .Mɪɴᴜᴛᴏʀ*
*┕──────────────────❒*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟɪ*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://cdn.ironman.my.id/i/2du3i5.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318387454868@newsletter',
                        newsletterName: '☇ 𝐀ɭι̇ι̇ 𝚩❍𝐓 𝐌𝛆፝֟፝֟ƞ̽ʊ̊ ꜜ🌸🤖͎᪳᪳𝆺𝅥',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/hpfd7a.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
;
