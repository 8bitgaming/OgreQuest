const router = require('express').Router();
const { Monster } = require('../../models');

router.get('/:id', (req, res) => {
    Monster.findOne({
        where: {
            id: req.params.id
        },
        // include: [
        //     {
        //         model: Monsters
        //     }
        // ]
    })
        .then(monsterData => res.json(monsterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
