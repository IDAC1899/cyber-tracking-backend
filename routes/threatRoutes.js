// routes/threatRoutes.js

const express = require('express');
const router = express.Router();

const threatCtrl = require('../controllers/threatCtrl');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/', verifyToken, threatCtrl.create);
router.get('/', verifyToken, threatCtrl.index);
router.get('/:id', verifyToken, threatCtrl.show);
router.put('/:id', verifyToken, threatCtrl.update);
router.delete('/:id', verifyToken, checkAdmin, threatCtrl.deleteThreat);

module.exports = router;