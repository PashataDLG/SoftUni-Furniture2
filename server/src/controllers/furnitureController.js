const router = require('express').Router();

const furnitureService = require('../services/furnitureService');
const errorMapper = require('../util/errorMapper');

router.get('/', async function (req, res) {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

router.post('/', async function (req, res) {
    try {
        const result = await furnitureService.createFurniture(req.body);

        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get('/:id', async function (req, res) {
    const id = req.params.id;

    const furniture = await furnitureService.getById(id);

    if (furniture) {
        res.json(furniture);
    } else {
        res.status(404).json({ message: `Furniture ${id} not found` });
    }
});

router.put('/:id', async function (req, res) {
    const id = req.params.id;
    const furnitureData = req.body;

    const furniture = await furnitureService.updateFurniture(id, furnitureData);

    if (furniture) {
        res.json(furniture);
    } else {
        res.status(404).json({ message: `Furniture ${id} not found` });
    }
});

router.delete('/:id', async function (req, res) {
    const id = req.params.id;

    try {
        const result = await furnitureService.deleteFurniture(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
});


module.exports = router;