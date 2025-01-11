//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0J6WjFONVUrUlU2YzdhREtkL0dBYXFuVkdoQ29jZUphbkxUQXRuL2dsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVZIWWlNc2xJZ2Qyako5RzRsYnpsMG5DMTRtWSt2eEdJTUhpbUZFWEhtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSWhkNXhVWVZZc0tRMHZoS3ZUNEQzVnRzTkU0eEs0SnNlMVVzZnJVUlVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMVo1N1NTa09JdGh2SEFBMTJ6SDNxRitkUkxlMm8rT2gwU2c2T3BqNW5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNZnVWOEJGTzZXclk1Nkh5MDV5blRDMXVoeEMwZFM1akhaSEZocm5EVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA2Q2dwRmJNSmRQdjdZMW1iR01XY3dlT0h6Z0ZldzQ1ODZWV2pmZEJCSEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlzMWE5c2U3dGdsZVdFS1diZWh4amt1bURLVkZvankyTjdNTHgvZHRHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickhoaDJHYjRmRjVhN0JIQWVXSEFzVVFycE8wYVA1QjcwZUhZMks5MWxCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPVVIvb1BkL2pKSjdyaFlZYmczMlNKSGpxTSthTjA3WWJTcCtqdmxEZk4zUWVaQzhjaS8wYzZKZmN6UXZnNWlOSnFoNXY2cERNRE5CekNPeDJwd2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlpXZEpsVjEzMmd1WnJaZC9rdlNzRDFKMTVBMEEvZCtienNUeGpyUlFkK009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTVCODlFRjRDNkEzQjVEQTdDREU4NDk5NzU3N0JCRTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjYwNDY2OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQXR3SDRXYXZTYm1QOVBIdHI1TlBxQSIsInBob25lSWQiOiI4NGM0MGY2Ni1iYjMxLTRmMTMtOGEyNy0wYmYwMTE3NWE3YTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclc3Zk90ajJLUW1JOG1ObnNiMllZeGZoN2tZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkErR2ZpekxaYUYzTVUrZ0I3b1B6UTl1N2RxUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHODJXWlFDRCIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJoNVBRRUVPbjNpYndHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVdSem5vNGJyY21pV0VGc1VGYk5qbnlLcDh6NUl2elFUWWdsSVRuTzBoWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTZYY0g3eDVRMlJHcVdKVFNJOGV2ajBzbm0zcGIySU9Wam9INnk0M1VNRDdxSVp5ZXJHT1MrUHBqVmJ3dFQ0WVlCUGc0T3lGRElBZkl0Tmg1OEZTQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Im52MzQxYmJHeEZPRGVoNXQ5ZW9iVGttQW4vN25CL1k1NEhRWVNVQVhScHB5YU9HM1U2WGZnL2lFRHpCWmFaRXRJWU0wVytuM21lTDlSUEs4MjZid2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDA3NzA4MTE5Mjk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRmtjNTZPRzYzSm9saEJiRkJXelk1OGlxZk0rU0w4MEUySUpTRTV6dElXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NjA0NjYzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFIcCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ANONIM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
