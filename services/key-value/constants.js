const HttpError = require('../../models/errors/http');

const NO_TTL = 0;
const CLEAN_INTERVAL = 30000;

const ERRORS = {
  KEY_INVALID: () => new HttpError(400, 'Key should be a string'),
  TTL_INVALID: () => new HttpError(400, 'TTL should be 0 or positive integer'),
  KEY_EXISTS: () => new HttpError(400, 'Key already exists'),
};

module.exports = {
  NO_TTL,
  ERRORS,
};
