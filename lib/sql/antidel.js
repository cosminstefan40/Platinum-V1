import config from '../../config.js';
import { DataTypes } from 'sequelize';

const AntiDelDB = config.DATABASE.define(
   'AntiDelete',
   {
      chatId: {
         type: DataTypes.STRING,
         primaryKey: true,
         allowNull: false,
      },
      status: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   {
      tableName: 'antidelete',
      timestamps: false,
   }
);

export async function setAnti(chatId, status) {
   try {
      const record = await AntiDelDB.findOne({ where: { chatId } });
      if (record) {
         await record.update({ status });
      } else {
         await AntiDelDB.create({ chatId, status });
      }
      return true;
   } catch (error) {
      console.error('Error setting anti-delete status:', error);
      return false;
   }
}

export async function getAnti(chatId) {
   try {
      const record = await AntiDelDB.findOne({ where: { chatId } });
      return record ? record.status : false;
   } catch (error) {
      console.error('Error getting anti-delete status:', error);
      return false;
   }
}
