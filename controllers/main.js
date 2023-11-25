const jwt = require('jsonwebtoken');

const { BadRequest } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest('You must provide username and password');
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({
    msg: 'user created',
    token,
  });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random(100) * 100);

  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `This is you lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
