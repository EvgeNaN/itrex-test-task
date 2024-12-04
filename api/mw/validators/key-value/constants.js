const HttpError = require('../../../../models/errors/http');

const ERRORS = {
  KEY_REQUIRED: () => new HttpError(400, 'Key required'),
  VALUE_REQUIRED: () => new HttpError(400, 'Value required'),
};

module.exports = {
  ERRORS,
};
