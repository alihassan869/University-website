require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const UserMOdel = require('../models/User2');
const User2MOdel = require('../models/User1');
const User3MOdel = require('../models/User3');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generatetoken = (id) => {
  const token = jwt.sign({ _id: id }, process.env.JWT_SECRET);
  return token;
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send({ mesaage: 'please add email or password' });
  }
  UserMOdel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt
        .compare(password, user.password)
        .then(async (domatch) => {
          if (domatch) {
            await user.updateOne({
              $set: {
                token: generatetoken(user._id),
              },
            });
            res.send({
              message: 'login successfully',
              user: user,
              token: generatetoken(user._id),
            });
          } else {
            res.send({ message: 'invalid email or password' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      res.send({ message: 'invalid email or password' });
    }
  });
};
exports.Register = async (req, res) => {
  const { name, email, password, message } = req.body;
  UserMOdel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'user already exists' });
    } else {
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const User = new UserMOdel({
          name,
          email,
          password: hashedpassword,
          message,
        });
        User.save((err) => {
          if (err) {
            res.send({ message: 'error occur' });
          } else {
            res.send({ message: 'Data Register' });
          }
        });
      });
    }
  });
};

const sendResetpasswordmail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const Mailoptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'for reset password',
      html: `<p>Hi ${name} you requested for password reset <a href="http://localhost:3000/reset/${token}">Link</a></p>
        `,
    };
    transporter.sendMail(Mailoptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('email sent ' + info.response);
      }
    });
  } catch (error) {
    console.log('catch error is:' + error);
  }
};
exports.Forget = async (req, res) => {
  const { email } = req.body;
  try {
    const userdata = await UserMOdel.findOne({ email: email });
    if (userdata) {
      const randomString = randomstring.generate();
      sendResetpasswordmail(userdata.name, userdata.email, randomString);
      const data = await UserMOdel.updateOne(
        { email: email },
        { $set: { token: randomString } },
      );
      res.send({ message: 'email sent check inbox' });
    } else {
      res.send({ message: 'invalid Email' });
    }
  } catch (error) {
    res.send({ message: 'error occurs' });
    console.log(error);
  }
};
exports.ResetPassword = async (req, res) => {
  const { password, token } = req.body;
  UserMOdel.findOne({ token: token, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (user) {
        bcrypt.hash(password, 12).then((hashedpassword) => {
          user.password = hashedpassword;
          user.token = '';
          user.save((err) => {
            if (!err) {
              res.send({ message: 'password updated successfully' });
            } else {
              console.log(err);
            }
          });
        });
      } else {
        res.send({ message: 'token not valid' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.Upload = async (req, res) => {
  let success = (await req.file.filename) + 'upload succesfully';
  res.send({ message: 'upload successfully', success: success });
  const newimage = new User3MOdel({
    image: {
      data: req.file.filename,
      contentType: 'CV/pdf',
    },
  });
  await newimage.save((err) => {
    if (!err) {
      console.log('Resume OR CV saved in uploads ');
    } else {
      console.log(err);
    }
  });
};
exports.Message = async (req, res) => {
  const { name, lastname, email, Phone, Experiance, message } = req.body;
  User2MOdel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User already exists' });
    } else {
      const User = new User2MOdel({
        name,
        lastname,
        email,
        Phone,
        Experiance,
        message,
      });
      User.save((err) => {
        if (err) {
          res.send({ message: 'error occur' });
        } else {
          res.send({ message: 'Application Submitted Successfully' });
        }
      });
    }
  });
};
