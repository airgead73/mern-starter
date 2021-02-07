const { Router } = require('express');
const { usersRouter } = require('./routes.users');
const { authenticationRouter } = require('./routes.authenticate');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/authenticate', authenticationRouter);

module.exports = {
  apiRouter
}