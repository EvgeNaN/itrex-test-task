const HttpError = require('../../../models/errors/http');

const { DEFAULT_CODE, DEFAULT_MESSAGE } = require('./constants');

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next();
  }

  console.error(err);

  if (err instanceof HttpError) {
    return res.status(err.code || DEFAULT_CODE).json({
      message: err.message || DEFAULT_MESSAGE,
    });
  }

  return res.status(DEFAULT_CODE).json({
    message: DEFAULT_MESSAGE,
  });
};
