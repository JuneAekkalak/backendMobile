const express = require('express');
const router = express.Router();
const dailyrecordController = require('../controller/dailyrecord');

// path
router.post('/add-record', dailyrecordController.addDailyRecord);

router.get('/record', dailyrecordController.getAllDailyRecord);

router.get('/getRecordById/:id', dailyrecordController.getDailyRecordById);

router.get('/getRecordByDate/:date/:User_id', dailyrecordController.getDailyRecordByDate);

module.exports = router;