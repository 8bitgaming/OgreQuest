const router = require('express').Router();
const { Monsters } = require('../../models');

router.get('/:id', (req, res) => {
    Monsters.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Monsters
            }
        ]
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
