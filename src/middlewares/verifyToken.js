const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader) return res.status(401).json({ error: 'Unauthorized Request' });
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    if(!bearerToken) return res.status(401).json({ error: 'Unauthorized Request' });
    const payload = jwt.verify(bearerToken, 'secretKey');
    req.userId = payload.userId;
    next();
}

module.exports = verifyToken;