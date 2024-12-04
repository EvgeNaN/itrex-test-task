const HttpError = require('../../../models/errors/http');

module.exports = (req, res, next) => {
  next(new HttpError(404, 'Not Found'));
};
