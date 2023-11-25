const { StatusCodes } = require('http-status-codes');

const CustomAPIError = require('./CustomAPIError');

class UnAuthorized extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthorized;
