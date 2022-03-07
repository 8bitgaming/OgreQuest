const router = require('express').Router();
const { User, Characters } = require('../../models');

// Find all users
router.get('/', (req, res) => {
    User.findAll({
        include: [
            {
                model: Characters
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
                model: Characters
            }
        ]
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// create new user
router.post('/', (req, res) => {
    /* req.body should look like this:
        {
        "username": "Someone",
        "email": "something@something.com",
        "password": "12345"
        }
    */
    User.create(req.body)
        .then((userData) => res.status(200).json(userData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update user
router.put('/:id', (req, res) => {
    /* req.body should look like this:
    {
    "username": "Someone2",
    "email": "somethings@something.com",
    "password": "1234567"
    }
*/
    User.update(
        {
            username: req.body.username,
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