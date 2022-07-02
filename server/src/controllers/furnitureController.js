const router = require('express').Router();

const furnitureService = require('../services/furnitureService');

router.get('/', async function (req, res) {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});


module.exports = router;