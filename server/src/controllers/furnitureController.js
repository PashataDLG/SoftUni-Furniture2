const router = require('express').Router();

const furnitureService = require('../services/furnitureService');
const errorMapper = require('../util/errorMapper');
const { isAuth, isOwner } = require('../middleware/routeGuards');
const preload = require('../middleware/preload');

router.get('/', async function (req, res) {
    const furniture = await furnitureService.getAll();

    res.json(furniture);
});

router.post('/', isAuth, async function (req, res) {
    let furnitureData = req.body;

    furnitureData._ownerId = req.user._id;

    try {
        const result = await furnitureService.createFurniture(furnitureData);

        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get('/:id', preload(furnitureService), async function (req, res) {
    res.json(res.locals.item);
});

router.put('/:id', isOwner, async function (req, res) {
    const id = req.params.id;
    const furnitureData = req.body;

    const furniture = await furnitureService.updateFurniture(id, furnitureData);

    if (furniture) {
        res.json(furniture);
    } else {
        res.status(404).json({ message: `Furniture ${id} not found` });
    }
});

router.delete('/:id', isAuth, isOwner, async function (req, res) {
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