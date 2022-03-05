const { Monsters } = require('../models');

const monstersdata = [
    {
    name: 'Puny Pendax',
    hp: 20,
    attack: 2,
    reward: 5,

    },
    {
        name: 'Frank the Tank',
        hp: 30,
        attack: 3,
        reward: 10,
    },
    {
        name: 'Millie the Medium',
        hp: 20,
        attack: 2,
        reward: 5,
    },
    {
        name: 'Simon the Simple',
        hp: 25,
        attack: 1,
        reward: 5,
    },
    {
        name: 'Blaze the Barbarian',
        hp: 30,
        attack: 5,
        reward: 15,
    },
];

const seedMonsters = () => Monsters.bulkCreate(monstersdata);

module.exports = seedMonsters;