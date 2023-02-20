require('dotenv').config();
const mongoose = require('mongoose');
const USERSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  Phone: String,
  Experiance: Number,
  message: String,
  quote: String,
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const User2MOdel = new mongoose.model(process.env.COLLECTION2, USERSchema);
module.exports = User2MOdel;
