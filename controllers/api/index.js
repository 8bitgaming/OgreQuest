const router = require('express').Router();
const userRoutes= require('./user-routes'); 

// user route
router.use('/users', userRoutes);

module.exports = router;