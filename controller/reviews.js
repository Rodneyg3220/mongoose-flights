const Flight = require('../models/flight');

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.reviews.push(req.body);
    try {
        //save any changes made to the movie doc
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}


module.exports = {
    create
};