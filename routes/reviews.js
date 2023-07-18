const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')


//Define the route here
router.post('/flights/:id/reviews', reviewsCtrl.create)

module.exports = router