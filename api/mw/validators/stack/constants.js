const HttpError = require('../../../../models/errors/http');

const ERRORS = {
  VALUE_REQUIRED: () => new HttpError(400, 'Value required'),
};

module.exports = {
  ERRORS,
};
