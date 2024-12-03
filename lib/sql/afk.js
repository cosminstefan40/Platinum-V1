import { DataTypes } from 'sequelize';
import config from '../../config.js';

const AfkDB = config.DATABASE.define(
   'Afk',
   {
      message: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      timestamp: {
         type: DataTypes.BIGINT,
         allowNull: true,
      },
   },
   {
      tableName: 'afk',
      timestamps: false,
   }
);

export async function getAfkMessage() {
   const result = await AfkDB.findOne();
   if (result) return { message: result.message, timestamp: result.timestamp };
   return null;
}

export const setAfkMessage = async (afkMessage, timestamp) => {
   const [afk] = await AfkDB.upsert({ id: 1, message: afkMessage, timestamp });
   return afk;
};

export const delAfkMessage = async () => {
   await AfkDB.destroy({ where: { id: 1 } });
};
