require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const app = express();
const multer = require('multer');
const userControlers = require('./controllers/Controllers');
require('./connnection/conn');
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded());
app.use(Cors());
// storage
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.pdf');
    },
  }),
}).single('image');
// Routes
app.post('/login', userControlers.Login);
app.post('/message', userControlers.Message);
app.post('/Register', userControlers.Register);
app.post('/Forget', userControlers.Forget);
app.post('/resetPassword', userControlers.ResetPassword);
app.post('/upload', upload, userControlers.Upload);
app.listen(port, () => {
  console.log(`server is running on running on ${port}`);
});
