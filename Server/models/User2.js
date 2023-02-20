require('dotenv').config();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const USERSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  message: String,
  quote: String,
  token: {
    type: String,
    default: '',
  },

  Date: {
    type: Date,
    default: Date.now(),
  },
});

const UserMOdel = new mongoose.model(process.env.COLLECTION1, USERSchema);
module.exports = UserMOdel;
