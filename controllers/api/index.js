const router = require('express').Router();
const userRoutes= require('./user-routes');
const monsterRoutes = require('./monster-routes');
const characterRoutes = require('./character-routes');

// user route
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/monsters', monsterRoutes);

module.exports = router;