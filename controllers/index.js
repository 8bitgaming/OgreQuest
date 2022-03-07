
const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

//start of log in work
const apiRoutes = require('./api');



module.exports = router;