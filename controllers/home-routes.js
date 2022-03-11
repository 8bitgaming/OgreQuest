const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, User, Monsters } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage', {
        userId: req.session.user_id,
        loggedIn: req.session.loggedIn
    });
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');

});

router.get('/character', (req, res) => {
    // finds one user
    User.findOne({
        where: {
            id: req.session.user_id
        },
        include: [
            {
                model: Character,
                attributes: ['name', 'gold'],
            }
        ]
    })
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ message: 'No character found for this user - use the section below to create one' });
                //or don't display this section at all if no characters found
                return;
            }

            const character = dbCharacterData.get({ plain: true });

            res.render('character', {
                character,
                user_id: req.session.user_id
            });
        })
});

module.exports = router;