const HttpError = require('../../../models/errors/http');

const ERRORS = {
  NOT_FOUND: () => new HttpError(404, 'Not Found'),
};

module.exports = {
  ERRORS,
};
