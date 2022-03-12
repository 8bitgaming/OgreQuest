const router = require('express').Router();
const { User, Character } = require('../../models');

//start of log in work
//to create a user

router.post('/', (req, res) => {
    // expects {username: "Lernantino", email: "lernantino@gmail.com", password: "password1234"}
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            console.log("this is dbUserData >>>>>", dbUserData);
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });

});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        console.log("this is dbUserData", dbUserData.id);
        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
        console.log("This is rec.session =>", req.session);
    });
});

router.post('/logout', (req, res) => {
    console.log("You are in logout");
    if (req.session.loggedIn) {
        console.log("Showing as logged in")
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        console.log("User was not logged in.");
        res.status(418).end();
        // res.send("You are not logged in.");
        
    }
})

// Find all users
router.get('/', (req, res) => {
    User.findAll({
        include: [
            {
                model: Character
            }
        ]
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// find one user
router.get('/:id', (req, res) => {
    // finds one user
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Character
            }
        ]
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update user
router.put('/:id', (req, res) => {
    /* req.body should look like this:
    {
    "email": "somethings@something.com",
    "password": "1234567"
    }
*/
    User.update(
        {
            email: req.body.email,
            password: req.body.password
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found with this id' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete user
router.delete('/:id', (req, res) => {
    // delete a user by its `id` value
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found with this id' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;