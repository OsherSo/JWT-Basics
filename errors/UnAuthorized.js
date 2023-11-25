const CustomAPIError = require('./CustomAPIError');

class UnAuthorized extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnAuthorized;
