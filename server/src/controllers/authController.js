const router = require('express').Router();

const authService = require('../services/authService');

router.post('/register', async function (req, res) {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async function (req, res) {
    try {
        const result = await authService.login(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;