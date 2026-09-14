const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, userCtrl.index);

module.exports = router;