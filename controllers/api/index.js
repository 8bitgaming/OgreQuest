const router = require('express').Router();
const userRoutes= require('./user-routes');
const monsterRoutes = require('./monster-routes');

// user route
router.use('/users', userRoutes);

router.use('/monster', monsterRoutes);

module.exports = router;