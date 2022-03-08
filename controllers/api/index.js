const router = require('express').Router();
const userRoutes= require('./user-routes');
const monsterRoutes = require('./monster-routes');
const characterRoutes = require('./character-routes');

// user route
router.use('/users', userRoutes);
router.use('/character', characterRoutes);

router.use('/monster', monsterRoutes);

module.exports = router;