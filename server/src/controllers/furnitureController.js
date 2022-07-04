const router = require('express').Router();

const furnitureService = require('../services/furnitureService');

router.get('/', async function (req, res) {
    console.log(req.query.where);
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

router.post('/', async function (req, res) {
    try {
        const result = await furnitureService.createFurniture(req.body);
        
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Request error'});
    }
});


module.exports = router;