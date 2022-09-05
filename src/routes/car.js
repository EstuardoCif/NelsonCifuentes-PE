const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');


router.get('/', carController.list);
router.post('/save', carController.saveCar);
router.get('/delete/:id', carController.deleteCar);
router.get('/update/:id', carController.updateCar);
router.post('/update/:id', carController.editCar);

module.exports = router;