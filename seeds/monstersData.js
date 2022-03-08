const { Monster } = require('../models');

const monstersdata = [
    {
        id: 1,
        name: 'Puny Pendax',
        hp: 20,
        attack: 2,
        reward: 5,

    },
    {
        id: 2,
        name: 'Frank the Tank',
        hp: 30,
        attack: 3,
        reward: 10,
    },
    {
        id: 3,
        name: 'Millie the Medium',
        hp: 20,
        attack: 2,
        reward: 5,
    },
    {
        id: 4,
        name: 'Simon the Simple',
        hp: 25,
        attack: 1,
        reward: 5,
    },
    {
        id: 5,
        name: 'Blaze the Barbarian',
        hp: 30,
        attack: 5,
        reward: 15,
    },
];

const seedMonsters = () => Monster.bulkCreate(monstersdata);

seedMonsters();
//module.exports = seedMonsters;