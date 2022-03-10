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
    User.findAll()
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }


            res.render('character', {
                dbPostData,
                user_id: req.session.user_id
            });
        })
})

module.exports = router;