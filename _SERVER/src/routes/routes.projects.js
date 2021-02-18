const { Router, response } = require('express');
const projectsRouter = Router();
const jwt = require('express-jwt');
const { JWT_SECRET } = require('../../../_CONFIG');

// models
const Project = require('../models/Project');

// middleware
const attachUser = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token) {
    return res.status(401).json({message: 'Authentication invalid'});
  }

  const decodedToken = jwtDecode(token.slice(7));

  if(!decodedToken) {
    return res.status(401).json({message: 'Problem authorizing reques'});
  } else {
    req.user = decodedToken;
    next();
  }

}
const checkJwt = jwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  issuer: 'api.starter',
  audience: 'api.starter'
});

// actions
const {
  create,
  read,
  read_one,
  update,
  delete_one,
  delete_all
} = require('../actions/actions.projects');

// router
projectsRouter
  .route('/')
  .get(checkJwt, read)
  .post(create)
  .delete(delete_all);

projectsRouter
  .route('/:projectID')
  .get(read_one)
  .put(update)
  .delete(delete_one);

module.exports = {
  projectsRouter,
}