const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }, 
    }, {
        timestamps: true
    
})


const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  ratingByYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 2000
  },
  airlineRating: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'F']
  },
  aiportName: [String],
  flownThisAirlineBefore: { type: Boolean, default: false },
  // reviews is an array of review subdocs!
  reviews: [reviewSchema]
}, {
  timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);