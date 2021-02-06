const express = require('express');
const cors = require('cors');

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



/**
 * DEV MIDDLEWARE
 */



/**
 * AUTHENTICATION
 */



/**
 * LOAD ROUTES
 */

app.get('/', (req, res, next) => {
  res.send('app loaded')
});


/**
 * ERROR HANDLING
 */



/**
 * EXPORT
 */
 
module.exports = app;