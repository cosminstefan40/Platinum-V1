import config from '../../config.js';

const Antilink = config.DATABASE.define(
   'AntilinkDB',
   {
      groupId: {
         type: config.DATABASE.Sequelize.STRING,
         allowNull: false,
         primaryKey: true,
      },
      enabled: {
         type: config.DATABASE.Sequelize.BOOLEAN,
         defaultValue: false,
      },
      action: {
         type: config.DATABASE.Sequelize.ENUM('delete', 'warn', 'kick'),
         defaultValue: 'delete',
      },
      warnings: {
         type: config.DATABASE.Sequelize.JSON,
         defaultValue: {},
      },
   },
   {
      tableName: 'antilink',
      timestamps: false,
   }
);

export { Antilink };
