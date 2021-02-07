const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {

  const salt = await bcrypt.genSalt(12);
  let hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;

}

module.exports = {
  hashPassword
}