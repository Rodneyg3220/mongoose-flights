const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 9999
    }, 
    }, {
        timestamps: true
    
})


const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta', 'United', 'Frontier']
      },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'KCI']
      },
    flightNo: {
    type: Number,
    default: function() {
      return new Date('YYYY-mm-dd').getFullYear();
    },
  },
  returningFlyer: { type: Boolean, default: false },
  // reviews is an array of review subdocs!
  destinations: [destinationSchema]
}, {
  timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);