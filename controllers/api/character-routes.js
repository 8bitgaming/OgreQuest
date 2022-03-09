const router = require('express').Router();
const { Character } = require('../../models');


//to create a character
router.post('/', (req, res) => {
    // expects {name: "Lernantino" user_id: "1"}
    Character.create({
        name: req.body.name,
        user_id: req.body.user_id
    })
        .then(CharacterData => res.json(CharacterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Find all characters
router.get('/', (req, res) => {
    Character.findAll()
        .then(CharacterData => res.json(CharacterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// find one character
router.get('/:id', (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(CharacterData => res.json(CharacterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a character
router.put('/:id', (req, res) => {
    /* req.body should look like this:
    {
    "name": "Someone2",
    "hp": 10,
    "attack": 10,
    "gold": "20
    }
*/
    Character.update(
        {
            name: req.body.name,
            hp: req.body.hp,
            attack: req.body.attack,
            gold: req.body.gold
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(CharacterData => {
            if (!CharacterData) {
                res.status(404).json({ message: 'No Character found with this id' });
                return;
            }
            res.json(CharacterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete character
router.delete('/:id', (req, res) => {
    // delete a user by its `id` value
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(CharacterData => {
            if (!CharacterData) {
                res.status(404).json({ message: 'No Character found with this id' });
                return;
            }
            res.json(CharacterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;