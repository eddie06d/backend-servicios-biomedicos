const { Router } = require('express');
const router = Router();

const User = require('../models/User');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', async (req, res) => {
    const id = req.params.id;
    const users = await User.find();
    res.status(200).json({ users });
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ user });
});

// READ
router.get('/info_personal/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({
        personal_information: user.info_personal
    });
});

// UPDATE
router.put('/info_personal/:id', async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, dni, phone, gender, dateBirth, address, sport } = req.body;
    const info_personal = { firstName, lastName, dni, phone, gender, dateBirth, address, sport };
    const user = await User.findByIdAndUpdate(id, { info_personal }, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({
        personal_information: user.info_personal
    });
});

// READ
router.get('/info_health/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({
        health_information: user.info_health
    });
});

// UPDATE
router.put('/info_health/:id', async (req, res) => {
    const id = req.params.id;
    const { heigth, weigth, bloodType, age, diseases, allergies } = req.body;
    const info_health = { heigth, weigth, age, bloodType, diseases, allergies };
    const user = await User.findByIdAndUpdate(id, { info_health }, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({
        health_information: user.info_health
    });
});

module.exports = router;