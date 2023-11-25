const jwt = require('jsonwebtoken');

const { UnAuthorized } = require('../errors');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new UnAuthorized('No token provided.');

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username } = decoded;
    req.user = { username };
    next();
  } catch (error) {
    throw new UnAuthorized('You are not authorized.');
  }
};

module.exports = auth;
