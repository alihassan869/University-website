require('dotenv').config();
const mongoose = require('mongoose');
module.exports = mongoose
  .connect(process.env.CONNCETION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });
