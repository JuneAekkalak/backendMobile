const express = require('express');
const router = express.Router();
const recorddetailController = require('../controller/recorddetail');

// path
router.post('/add-record', recorddetailController.addRecordDetail);

// router.get('/disease', diseaseController.getAllDisease);

// router.get('/getDiseaseById/:id', diseaseController.getDiseaseById);


module.exports = router;