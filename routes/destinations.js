const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controller/destinations')


//Define the route here
router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router