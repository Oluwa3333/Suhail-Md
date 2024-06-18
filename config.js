const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_08_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFCN0lVOHBDTDNZM3pEa1pKTlBRRDNtc2ViaEJoWklUU05RN3g0cThOOFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1ELWllMXVXUVgyVmtJVEpIUWJuTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDViYTNkZDUtODk5Yi00NzNjLWE5OTctNThmMzg2ZjE2YjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDE2LFxuICAgICAgMjAwLFxuICAgICAgMTYsXG4gICAgICAxMDAsXG4gICAgICAxMSxcbiAgICAgIDkxLFxuICAgICAgMTI1LFxuICAgICAgMTA1LFxuICAgICAgMTY2LFxuICAgICAgMTExLFxuICAgICAgMTc1LFxuICAgICAgNixcbiAgICAgIDIyNyxcbiAgICAgIDE0MixcbiAgICAgIDE0NyxcbiAgICAgIDY2LFxuICAgICAgMjExLFxuICAgICAgMTY2LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDExLFxuICAgICAgMTU4LFxuICAgICAgMTM0LFxuICAgICAgMTA2LFxuICAgICAgMTU0LFxuICAgICAgNDIsXG4gICAgICAxMTgsXG4gICAgICA2OCxcbiAgICAgIDgzLFxuICAgICAgMTIzLFxuICAgICAgMjMzLFxuICAgICAgOTIsXG4gICAgICAzNixcbiAgICAgIDIyNCxcbiAgICAgIDI0NSxcbiAgICAgIDk4LFxuICAgICAgMTkxLFxuICAgICAgMTUzLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKNThSSkNTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9zaF9HcmFwaGljc2Rlc2lnbi5GcmFtZXMgTHRkXCIsXG4gICAgXCJsaWRcIjogXCIxNzk4NzMyMzAzNzcxNzk6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUhNcHM4RkVJNmF4N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvVmljZTQremEreFh3Ukp6VnNHK1p0S2FYVXZyb3I4bXA4VXBtckg0cWprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkgyZDhyUU9obEJrMGFpK2Y0bFJnaGNCVW5RM0xDbkZsZ1RqVFU1dHczS2QxeE9qemVoQ2lMVU00S1YwQmdidGlxVjBpN28xS2k4eStXTjVCN29DVkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjh0NzV3UlNBTEhwb1FYTU9memQvYWFqS0NWNkdnWkl1RDZkUEhJRXI2NkQvdnp6WFR5bnVxK3A1eEZ2UmpCRVdEcmVMU0VlMTZGYTFLUjVqYU4rYUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc2Mjc5Mzc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MzQwOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2Vy5qc29uIjogIntcImtleURhdGFcIjpcIk1HUGRmd2E0K0UvZnp5SHJLYitKU0hOY3BxaEZ6NGwxdk11d0h3KzZGRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDYwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcxMDgzODMxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
