const express = require('express');
const router = express.Router();
const incidentCtrl = require('../controllers/incidentCtrl');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.use(verifyToken); // every incident route requires sign-in

router.post('/', incidentCtrl.create);
router.get('/', incidentCtrl.index);
router.get('/:id', incidentCtrl.show);
router.put('/:id', incidentCtrl.update);
router.delete('/:id', checkAdmin, incidentCtrl.deleteIncident); // admin only

module.exports = router;