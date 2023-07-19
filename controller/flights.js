const Flight = require('../models/flight');
// const { router } = require('../server');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  newFlight,
  create,
  addDestination,
  deleteFlight,
  addTicket
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
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.flownBefore = !!req.body.flownBefore;
//   // remove any whitespace at start and end of cast
//   req.body.departs = req.body.departs.trim;
//   // split cast into an array if it's not an empty string - using a regular expression as a separator
//   if (req.body.departs) req.body.departs = req.body.departs.split(/\s*,\s*/);
//   // Remove empty properties so that defaults will be applied
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the Flights index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
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

function addTicket(req, res, next) {
    var seat = req.body.seat;
    var price = req.body.price;
    var flight = req.params.id;
    var ticket = new Ticket({seat, price, flight});
    ticket.save(function(err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        // for now, redirect right back to new.ejs
        res.redirect(`/flights/${req.params.id}`);
    });
  };

  function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
      if (err) return res.redirect('/flights');
        console.log(flight);
      res.redirect('/flights');
    });
  };