const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monsters extends Model {}

Monsters.init(
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
        
        reward: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
);

module.exports = Monsters;