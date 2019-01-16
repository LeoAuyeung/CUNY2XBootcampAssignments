const router = require('express').Router();
module.exports = router;

router.use('/campuses', require('./campuses')) //require('./api/campuses.js');
router.use('./students', require('./students')); //require('./api/students.js');