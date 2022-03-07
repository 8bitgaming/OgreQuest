const router = require('express').Router();
const userRoutes= require('./user-routes');
const monstersRoutes = require('./monsters-routes');

// user route
router.use('/users', userRoutes);

router.use('/monsters', monstersRoutes);

module.exports = router;