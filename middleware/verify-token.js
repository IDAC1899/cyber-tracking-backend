// middleware/verify-token.js

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  try {
    // grab the raw "Bearer <token>" string from the header
    const bearerToken = req.headers.authorization;

    // no header at all means no attempt to authenticate
    if (!bearerToken) throw new Error('Login Required');

    // strip off the word "Bearer" and keep just the token itself
    const token = bearerToken.split(' ')[1];

    // this throws if the token is expired, tampered with, or signed with a different secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach the payload so any route after this one knows who's asking
    req.user = decoded.payload;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: 'Login Required' });
  }
}

module.exports = verifyToken;