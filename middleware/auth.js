const jwt = require('jsonwebtoken');

const CustomAPIError = require('../errors/custom-error');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new CustomAPIError('No token provided.', 401);

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username } = decoded;
    req.user = { username };
    next();
  } catch (error) {
    throw new CustomAPIError('You are not authorized.', 401);
  }
};

module.exports = auth;
