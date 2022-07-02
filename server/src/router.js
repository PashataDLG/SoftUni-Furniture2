const router = require('express').Router();

const furnitureController = require('../src/controllers/furnitureController');

router.use('/data/catalog', furnitureController);

module.exports = router;