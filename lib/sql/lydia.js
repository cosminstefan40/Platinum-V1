import { DataTypes } from 'sequelize';
import config from '../../config.js';

export const ChatBot = config.DATABASE.define(
   'ChatBot',
   {
      isActive: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
      isDMOnly: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
      isGCOnly: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   {
      tableName: 'lydia',
      timestamps: false,
   }
);
