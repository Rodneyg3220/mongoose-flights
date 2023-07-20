const Ticket = require('../models/ticket');


async function create(req, res) {
    const ticket = new Ticket(req.body);
    ticket.flight = (req.params.id)
    try {
        //save any changes made to the flight doc
        await ticket.save();
        res.redirect('/flight/id')
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/tickets/${ticket._id}`);
}

function newTicket (req, res) {
    res.render('ticket/new', { title: 'Add Ticket', errorMsg: '' });
}



module.exports = {
    create,
    newTicket
};