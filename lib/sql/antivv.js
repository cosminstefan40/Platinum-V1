import config from '../../config.js';
import { DataTypes } from 'sequelize';

const AntiVVDB = config.DATABASE.define(
   'AntiVV',
   {
      type: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      timestamps: false,
   }
);

export const getStatus = async () => {
   const record = await AntiVVDB.findOne();
   if (!record) return false;
   return record.type;
};

export const enableAntiVV = async (type) => {
   if (!['all', 'dm', 'gc'].includes(type)) return `_Use all | gc | dm_`;
   await AntiVVDB.upsert({ id: 1, type });
   return `_Anti-ViewOnce enabled for ${type}._`;
};

export const disableAntiVV = async () => {
   await AntiVVDB.destroy({ where: {} });
   return '_Anti-ViewOnce disabled._';
};
