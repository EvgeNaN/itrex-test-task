const HttpError = require('../../models/errors/http');

const MAX_SIZE = 1000;

const ERRORS = {
  VALUE_REQUIRED: () => new HttpError(400, 'Value required'),
  OVERFLOW: () => new HttpError(400, 'Overflow - stack reached max number of elements'),
};

module.exports = {
  MAX_SIZE,
  ERRORS,
};
