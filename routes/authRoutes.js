const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');
const verifyToken = require('../middleware/verifyToken');

router.post('/sign-up', authCtrl.signup);
router.post('/sign-in', authCtrl.login);
router.get('/sign-out', verifyToken, authCtrl.signout);
router.get('/me', verifyToken, authCtrl.getMe);

module.exports = router;