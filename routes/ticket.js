const express = require('express')
const router = express.Router()
const ticketCtrl = require('../controller/ticket')


//Define the route here
router.post('/flights/:id/tickets/', ticketCtrl.create)
router.get('/flights/:id/tickets/new', ticketCtrl.new)

module.exports = router