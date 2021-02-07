const express = require('express');
const cors = require('cors');
const path = require('path');
const User = require('./src/models/User');

const { 
  hashPassword
} = require('./src/util/authentication');

/**
 * INTIALIZE APP
 */

const app = express();
const { connectDB } = require('../_CONFIG');
connectDB();

/**
 * SECURITY
 */

app.use(cors());

/**
 * MIDDLEWARE
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../_PUBLIC')));

/**
 * DEV MIDDLEWARE
 */



/**
 * AUTHENTICATION
 */



/**
 * LOAD ROUTES
 */

const asyncHandler = require('./src/middleware/handleAsync');

app.post('/api/users', asyncHandler(async function(req, res, next) {

  const { email, firstName, lastName, role } = req.body;

  // check if email exists
  const existingEmail = await User.findOne({ email }).lean();

  if(existingEmail) {
    return res
      .status(400)
      .json({
        success: false,
        message: 'Email already exists.'
      });
  }

  const password = await hashPassword(req.body.password);

  const userData = {
    email: email.toLowerCase(),
    firstName,
    lastName,
    password,
    role
  }

  const newUser = new User(userData);
  const savedUser = await newUser.save();

  if(savedUser) {

    return res
      .status(200)
      .json({
        success: true,
        message: `New user ${savedUser.firstName} ${savedUser.lastName} created.`
      });
    
  } else {
    return res
    .status(400)
    .json({
      success: false,
      message: 'There was problem creating this account.'
    });
  }

  

}));

app.post('/api/users/authenticate', asyncHandler(async function(req, res, next) {

  const { email, firstName, lastName } = req.body;

}));



/**
 * ERROR HANDLING
 */



/**
 * EXPORT
 */
 
module.exports = app;