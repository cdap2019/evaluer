const mongoose = require('mongoose');

// Land Schema
const LandSchema = mongoose.Schema ({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  // user:{
  //   type: String,
  //   required: true
  // },
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
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true,
    trim: true
  },
  lat:{
    type: Number,
    required: true
  },
  lon:{
    type: Number,
    required: true
  },
  recordInsertedDate:{
    type:Date,
    default:Date.now
  }
});

const Land = module.exports = mongoose.model('Land', LandSchema);