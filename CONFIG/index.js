const { 
  PORT,
  ISDEV
} = require('./constants');

const connectDB = require('./db');


module.exports = {
  PORT,
  ISDEV,
  connectDB
}