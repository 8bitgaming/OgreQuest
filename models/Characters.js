const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model { }

Characters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            AutoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },

        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        // user_id : {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }

    }
);

module.exports = Characters;