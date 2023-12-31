const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require('../controller/flights');
	
// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.newFlight);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
