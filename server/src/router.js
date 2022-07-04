const router = require('express').Router();

const furnitureController = require('../src/controllers/furnitureController');
const authController = require('../src/controllers/authController');

router.use('/users', authController);
router.use('/data/catalog', furnitureController);

module.exports = router;