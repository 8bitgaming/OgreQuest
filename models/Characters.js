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
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20

        },

        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
        },

        gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }

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