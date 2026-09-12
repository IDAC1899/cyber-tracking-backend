const express = require('express');
const router = express.Router();

const investigationCtrl = require('../controllers/investigationCtrl');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/', verifyToken, investigationCtrl.create);
router.get('/', verifyToken, investigationCtrl.index);
router.get('/:id', verifyToken, investigationCtrl.show);
router.put('/:id', verifyToken, investigationCtrl.update);
router.delete('/:id', verifyToken, checkAdmin, investigationCtrl.deleteInvestigation);

module.exports = router;