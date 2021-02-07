const express = require('express');
const cors = require('cors');
const path = require('path');

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

 const { apiRouter } = require('./src/routes/index');
 app.use('/api', apiRouter);


/**
 * ERROR HANDLING
 */



/**
 * EXPORT
 */
 
module.exports = app;