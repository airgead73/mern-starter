const jwt = require('express-jwt');
const { JWT_SECRET } = require('../../../_CONFIG');
const jwtDecode = require('jwt-decode');


/**
 * @TODO Add error handling for checkJwt
 */

exports.checkJwt = jwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  issuer: 'api.starter',
  audience: 'api.starter',
  getToken: req => req.cookies.token
});

exports.attachUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
    return res.status(401).json({message: 'Authentication invalid'});
  }

  const decodedToken = jwtDecode(token);

  if(!decodedToken) {
    return res.status(401).json({message: 'Problem authorizing reques'});
  } else {
    req.user = decodedToken;
    next();
  }

}