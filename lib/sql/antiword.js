import { DataTypes } from 'sequelize';
import config from '../../config.js';

const AntiWord = config.DATABASE.define(
   'AntiWordDB',
   {
      groupId: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         primaryKey: true,
      },
      isEnabled: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
      filterWords: {
         type: DataTypes.TEXT,
         allowNull: true,
         get() {
            const rawData = this.getDataValue('filterWords');
            return rawData ? JSON.parse(rawData) : [];
         },
         set(value) {
            this.setDataValue('filterWords', JSON.stringify(value));
         },
      },
      warnings: {
         type: DataTypes.JSON,
         defaultValue: {},
         get() {
            return this.getDataValue('warnings') || {};
         },
         set(value) {
            this.setDataValue('warnings', value);
         },
      },
   },
   {
      tableName: 'antiword',
      timestamps: false,
   }
);

export { AntiWord };
