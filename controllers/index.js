
const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

//start of log in work
const apiRoutes = require('./api');

router.use('/api', apiRoutes);




module.exports = router;