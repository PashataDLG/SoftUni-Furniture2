const router = require('express').Router();

const furnitureService = require('../services/furnitureService');

router.get('/', async function (req, res) {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

router.post('/', async function (req, res) {
    try {
        const result = await furnitureService.createFurniture(req.body);
        
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: 'Request error'});
    }
});

router.get('/:id', async function (req, res) {
    const id = req.params.id;

    const furniture = await furnitureService.getById(id);

    if(furniture){
        res.json(furniture);
    } else {
        res.status(404).json({ message: `Furniture ${id} not found`});
    }
});


module.exports = router;