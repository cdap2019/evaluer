const mongoose = require('mongoose');

// Land Schema
const LandSchema = mongoose.Schema ({
  price: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  province:{
    type: String,
    required: true
  },
  district:{
    type: Number,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  lat:{
    type: Number,
    required: true
  },
  lon:{
    type: Number,
    required: true
  }
});

const Land = module.exports = mongoose.model('Land', LandSchema);