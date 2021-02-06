const express = require('express');
const cors = require('cors');

/**
 * INTIALIZE APP
 */

const app = express();

app.set('environment', process.env.NODE_ENV);

console.log(app.get('environment'));

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



/**
 * ERROR HANDLING
 */



/**
 * EXPORT
 */
 
module.exports = app;