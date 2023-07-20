const Flight = require('../models/flight');
// const { router } = require('../server');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  newFlight,
  create,
  addDestination
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Flight Booking', errorMsg: '' });
}

async function create(req, res) {
  req.body.flownBefore = !!req.body.flownBefore;
  try {
   console.log(req.body)
   await Flight.create(req.body);

    res.redirect('/flights');  

  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

function addDestination(req, res, next) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err, flight) {
          res.redirect(`/flights/${flight._id}`);
      });
    });
}