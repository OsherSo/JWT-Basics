const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('You must provide username and password', 400);
  }

  res.send('Login');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random(100) * 100);
  res.status(200).json({
    msg: 'Hello Kazoon',
    secret: `This is you lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
