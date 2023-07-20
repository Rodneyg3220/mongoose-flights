const Flight = require('../models/flight');
const Ticket = require(`../models/ticket`);



async function create(req,res) {
  req.body.flight = req.params.id
  try {
  console.log(req.body)
  
  const ticket = await Ticket.create(req.body)
    res.redirect(`/flights/${ticket.flight}`)
} catch (err) {
    console.log(err);
    res.redirect('/flights');
  }
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
  