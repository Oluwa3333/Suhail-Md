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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_20_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsYi9jRE5XUENWU0hiUUM2R3g0eEtyYktqR09Na2NVKy9UbS9CRGpYbnRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDWFpoOEVXUFJGbTZDdTY3YXY4WUN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiMGFmNTdiLWYyOTAtNDBmYS05MDhlLTkwZTMzM2EyZGMwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDM2LFxuICAgICAgMTcyLFxuICAgICAgMTYzLFxuICAgICAgNDMsXG4gICAgICAxNjYsXG4gICAgICA1OCxcbiAgICAgIDI0NyxcbiAgICAgIDEzNSxcbiAgICAgIDEzNCxcbiAgICAgIDIxOSxcbiAgICAgIDE2OSxcbiAgICAgIDEwMyxcbiAgICAgIDI0OCxcbiAgICAgIDE2OCxcbiAgICAgIDIwMixcbiAgICAgIDI0NyxcbiAgICAgIDE2MSxcbiAgICAgIDEwMyxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAyMzYsXG4gICAgICAxNjIsXG4gICAgICA0OSxcbiAgICAgIDI1NSxcbiAgICAgIDg5LFxuICAgICAgNjUsXG4gICAgICAyMzgsXG4gICAgICAyMzYsXG4gICAgICAxODUsXG4gICAgICA4NCxcbiAgICAgIDE0NyxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDIyNyxcbiAgICAgIDE5NCxcbiAgICAgIDE2NixcbiAgICAgIDIxNCxcbiAgICAgIDIyLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhKQTFUVEYyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9zaF9HcmFwaGljc2Rlc2lnbi5GcmFtZXMgTHRkXCIsXG4gICAgXCJsaWRcIjogXCIxNzk4NzMyMzAzNzcxNzk6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJNcHM4RkVNRHh5Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvVmljZTQremEreFh3Ukp6VnNHK1p0S2FYVXZyb3I4bXA4VXBtckg0cWprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1RbTRLb0x1ZkdoUVZnZWExVWROZTBBZEJxYUZEa3BSOXZRNCswZHk3Z2hCRFZ5Z0IvV3JkU1Z4M2V6cEN2WnRqY0hsd2VndEloMzNlQ2tiT3VqMEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitDbGw3M1U1ZGJJVzM5MFFtbWFGYnFWWmtqQlJITm5OVEZPZmp0ZGx2TnRFT0JLcDFkSXFHa2NIR2VNc3ZQWXg4QmJuWVI3S0lvaURhSjZrbEVVSEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc2Mjc5Mzc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3NzgwNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2Vy5qc29uIjogIntcImtleURhdGFcIjpcIk1HUGRmd2E0K0UvZnp5SHJLYitKU0hOY3BxaEZ6NGwxdk11d0h3KzZGRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDYwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcxMDgzODMxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
