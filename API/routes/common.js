const express = require('express');
var app = express();

var commonController = require('../controllers/common.controller');

var router = express.Router();

// States
router.route('/state')
.get(commonController.getStateList)
.post(commonController.addState)

//Cities
router.get('/cities', commonController.getAllCities)

router.get('/cities/:state_id', commonController.getCityList)
.post('/cities', commonController.addCity)

router.delete('/city/:cityId', commonController.removeCity)

//checkemail-availability
router.get('/checkemail-availability/email/:email', commonController.checkemailAvailability)

module.exports = router;