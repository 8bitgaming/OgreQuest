const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, User, Monsters } = require('../models');


router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/character');
        return;
    }
    res.render('homepage', {
        userId: req.session.user_id,
        loggedIn: req.session.loggedIn
    });
});

// There is no log in page this is no longer neeeded

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/character');
//         return;
//     }
//     res.render('login');

// });

router.get('/character', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    // finds one user
    User.findOne({
        where: {
            id: req.session.user_id
        },
        include: [
            {
                model: Character,
                attributes: ['id','name', 'gold', 'attack'],
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

router.get('/character/:id', (req, res) => {
    // a check will need to be included that user id matches characters users id so no others can access other characters
    // this will be added later

    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    // finds one user
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ message: 'No character found for this user ' });
                //or don't display this section at all if no characters found
                return;
            }

            const character = dbCharacterData.get({ plain: true });

            res.render('upgrade', {
                character,
                user_id: req.session.user_id
            });
        })
});



router.get('/battlepage/:id', (req, res) => {

    // a check will need to be included that user id matches characters users id so no others can access other characters
    // this will be added later

    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    // finds one user
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ message: 'No character found for this user ' });
                //or don't display this section at all if no characters found
                return;
            }

            const character = dbCharacterData.get({ plain: true });
            res.render('battlepage', {
                layout: 'battle',
                character,
                user_id: req.session.user_id
            });

        })
    })




module.exports = router;