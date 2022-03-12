const { urlencoded } = require('express');
const { Monster } = require('../models');

const monstersdata = [
    {
        id: 1,
        name: 'Shrogre',
        hp: 5,
        attack: 1,
        reward: 5,
        img: URL("/img/ogre1.png"),

    },
    {
        id: 2,
        name: 'Bolgre',
        hp: 10,
        attack: 2,
        reward: 10,
        img: URL("/img/ogre2.png"),
    },
    {
        id: 3,
        name: 'The Ogrenator',
        hp: 15,
        attack: 4,
        reward: 15,
        img: URL("/img/ogre3.png"),
    },
    {
        id: 4,
        name: 'Azogre',
        hp: 20,
        attack: 5,
        reward: 20,
        img: URL("/img/ogre4.png"),
    },
    {
        id: 5,
        name: 'Ogrampus',
        hp: 30,
        attack: 10,
        reward: 25,
        img: URL("/img/ogre5.png"),
    },
];

const seedMonsters = () => Monster.bulkCreate(monstersdata);

seedMonsters();
//module.exports = seedMonsters;