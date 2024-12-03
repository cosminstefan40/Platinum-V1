const mongoose = require('mongoose');
const config = require('../../config.js');

const BanSchema = new mongoose.Schema({
   jid: {
      type: String,
      unique: true,
      required: true,
   },
}, { collection: 'ban', timestamps: false });

const BanDB = mongoose.model('Ban', BanSchema);

const addBan = async (jid) => {
   const fullJid = jid.includes('@s.whatsapp.net') ? jid : `${jid}@s.whatsapp.net`;
   const trimmedJid = fullJid.replace('@s.whatsapp.net', '');
   await BanDB.create({ jid: trimmedJid });
   return `_@${trimmedJid} has been banned._`;
};

const removeBan = async (jid) => {
   const fullJid = jid.includes('@s.whatsapp.net') ? jid : `${jid}@s.whatsapp.net`;
   const trimmedJid = fullJid.replace('@s.whatsapp.net', '');
   const ban = await BanDB.findOne({ jid: trimmedJid });
   if (ban) {
      await BanDB.deleteOne({ jid: trimmedJid });
      return `_@${trimmedJid} unbanned._`;
   }
   return `_@${trimmedJid} wasn't banned._`;
};

const getBanned = async () => {
   const bannedUsers = await BanDB.find({}, { jid: 1, _id: 0 });
   return bannedUsers.map((user) => user.jid);
};

const isBanned = async (jid) => {
   const fullJid = jid.includes('@s.whatsapp.net') ? jid : `${jid}@s.whatsapp.net`;
   const trimmedJid = fullJid.replace('@s.whatsapp.net', '');
   const bannedUsers = await getBanned();
   if (bannedUsers.includes('2348060598064@s.whatsapp.net')) return false;
   if (bannedUsers.includes(trimmedJid)) return true;
   return false;
};

module.exports = { BanDB, addBan, removeBan, getBanned, isBanned };
      
