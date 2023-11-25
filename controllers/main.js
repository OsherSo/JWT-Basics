const login = async (req, res) => {
  res.send('login');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random(100) * 100);
  res.send(200).json({
    msg: 'Hello Kazoon',
    secret: `This is you lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
