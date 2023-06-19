const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  data: {
    type: [Number],
    required: true,
  },
});

exports.Calculation = mongoose.model('Calculation', calculationSchema);