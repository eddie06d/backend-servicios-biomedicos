const { Router } = require('express');
const router = Router();
const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { email, password, photo } = req.body;
    const user = new User({ email, password, photo });
    await user.save();
    
    const token = jwt.sign({ userId: user._id }, 'secretKey');

    res.status(200).json({ token, user });
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'User not found with that email' });
    }
    if (user.password !== password) {
        return res.status(401).json({ error: 'Password is incorrect' });
    }
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.status(200).json({ token, user });
});

module.exports = router;