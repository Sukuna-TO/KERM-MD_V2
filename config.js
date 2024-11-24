//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237699586756";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BReWJ1bmRxL3ZCamdENDdNRC9la3QyT00wck9KVFRQbk5NaGNoMW1uMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDNyVmhpdEQvQ0RLSGNJcGVpc0Q3TmF4a3FWN3RRa3ZBMjd0TXFDc2tDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQzRtcjJWNi81dlNIcXMyQ3g0UVEwM3Z3MmxHNHkyREZqbXVmd2dJRWtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aUltNXJrZHJyM1JjUi84dDRTTjZYak9PZUpxY0tqRHdNRzlYSW1uVWp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNOTFpN2hsMHBxZXFrYkxISGZaWHgxRFJNb2lnK0RnUVZCa3M1aUF1WEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLQWcvTzhoYmgzWmlWa29BQVJ4RDc4Sm1zYUNPOFVwZlUySXlXdWMvVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhieDd3czJiNm50MzFSRGFjTVN3VHlDT1Q2Vk9DMUNsK2tGY1BmTk1sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjJSZm93bDR6Lzd0U1FyZGpUNGRBU3g5cGFYQUN2bHl2UEdCNVFEYzZnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhTREppcWpmd0N4Rm9aR0FHTlZtR2t4SDBMN0JjdGRaemJFOHJEK3V5dEN2S3cwbTdnTkFBVnVRZXB5UXZEVGF2c1g0SldZbFM1WWo0UmZ0YnN0bWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IjljVmhIRkRhZ3lvL0FXQkhaSG1Yem1ncWl4ZjUwUzI3cTVSUGFwcFlqWlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJ1b3hMWEVsVFNhWnhhZ25RXzhocEEiLCJwaG9uZUlkIjoiYjNhMDhkODItNTlhYS00NGQ1LTliNzItOGVkNzc3YmJmOTE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNNMnlKUm5hVWNJMHFra1ZiRWZzUXdZNGhzST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2NQenhmakJZRTU2ZTlSaHM5TmIwOTlnQ3ZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTU9Kc1lRR0VQUHdqYm9HR0JVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHZ3RGtqRFF5Q2N1VURnclFhSGw2SXpQMjY1MkRZL21qcW41VzFPa1lWQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY3RTNUJlaEhkSVZlSTJEWXJZUU5yWCtITzVZUWdsbWNZV1BHSUozKzFMZFJ1S3hSeDd1cGFMcmhuUGZ0QjgvZjF6QTNMNGRqME5qeFVoOVZiMC9IaGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZwR3lyaTAzNE9VTzVLVHNONHJBVXdJaTg5aVNQRk9xaEgzdk54OGJqTktQNnNuU3NKWWhQNEp2cWJQM2kyT0drejVNSmdZKzZuMW5hV1lZamhpZ2hRPT0ifSwibWUiOnsiaWQiOiIyMzc2OTk1ODY3NTY6NDNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDc1NTgzOTk3NjI2NzA6NDNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5OTU4Njc1Njo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRNzhBNUl3ME1nbkxsQTRLMEdoNWVpTXo5dXVkZzJQNW82cCtWdFRwR0ZRIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQ3NTAwOCwibGFzdFByb3BIYXNoIjoiSVhvRHAiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUs2YyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "Sukuna",
  packname: process.env.PACK_NAME || "Sukuna",
  botname: process.env.BOT_NAME || "Sukuna𖤐",
  ownername: process.env.OWNER_NAME || "Sukuna",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "false",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
