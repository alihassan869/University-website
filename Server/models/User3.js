require('dotenv').config();
const mongoose = require('mongoose');
const USERSchema = new mongoose.Schema({
  image: {
    data: String,
    contentType: String,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const User3MOdel = new mongoose.model(process.env.COLLECTION3, USERSchema);
module.exports = User3MOdel;
