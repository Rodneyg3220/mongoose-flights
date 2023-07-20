const Flight = require('../models/flight');
const Ticket = require(`../models/ticket`);



function create(req,res) {
  req.body.flight = req.params.id
  console.log(req.body)
  Ticket.create(req.body, function(err, ticket) {
    res.redirect(`/flights/${ticket.flight}`)
  })
}

function newTicket(req, res) {
  res.render('ticket/new', {
    title: 'Add Ticket',
    flight: req.params.id
  })
}

module.exports = {
    create, 
    new: newTicket
  }
  