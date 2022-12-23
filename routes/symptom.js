const express = require('express');
const router = express.Router();
const symptomController = require('../controller/symtom');

// path
router.post('/add-symtom', symptomController.addSymptom);

router.get('/symptom', symptomController.getAllSymptom);

router.get('/getSymptomById/:id', symptomController.getSymptomById);

router.get('/getSymptomByType/:BodyTyep_id', symptomController.getSymptomByType);

router.get('/getSymptomByDisease/:id', symptomController.getSymptomByType);


module.exports = router;