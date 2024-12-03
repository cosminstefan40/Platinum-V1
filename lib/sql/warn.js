import config from '../../config.js';
import { DataTypes } from 'sequelize';

const WarnDB = config.DATABASE.define(
   'Warn',
   {
      jid: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      warnings: {
         type: DataTypes.INTEGER,
         defaultValue: 0,
      },
      reason: {
         type: DataTypes.TEXT,
         allowNull: true,
      },
   },
   {
      timestamps: false,
   }
);

export const addWarn = async (jid, reason) => {
   const user = await WarnDB.findOne({ where: { jid } });
   if (user) {
      user.warnings += 1;
      user.reason = user.reason ? `${user.reason}\n${user.warnings}: ${reason}` : `${user.warnings}: ${reason}`;
      await user.save();
      return { success: true, warnings: user.warnings, reason: user.reason };
   } else {
      const newUser = await WarnDB.create({
         jid,
         warnings: 1,
         reason: `1: ${reason}`,
      });
      return { success: true, warnings: newUser.warnings, reason: newUser.reason };
   }
};

export const getWarn = async (jid) => {
   const user = await WarnDB.findOne({ where: { jid } });
   return { success: true, warnings: user ? user.warnings : 0, reason: user ? user.reason : null };
};

export const resetWarn = async (jid) => {
   const user = await WarnDB.findOne({ where: { jid } });
   if (user) {
      user.warnings = 0;
      user.reason = null;
      await user.save();
   }
   return { success: true };
};

export const isWarned = async (jid) => {
   const user = await WarnDB.findOne({ where: { jid } });
   return user ? user.warnings > 0 : false;
};

export default WarnDB;
