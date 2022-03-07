const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model { }

// to create character user would input name
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

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters'
    }

);

module.exports = Characters;