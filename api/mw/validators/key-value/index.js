const { ERRORS } = require('./constants');

module.exports = {
  create: (req, res, next) => {
    if (!req.body.key) {
      return next(ERRORS.KEY_REQUIRED());
    }

    if (!req.body.value) {
      return next(ERRORS.VALUE_REQUIRED());
    }

    next();
  },
  get: (req, res, next) => {
    if (!req.query.key) {
      return next(ERRORS.KEY_REQUIRED());
    }

    next();
  },
  delete: (req, res, next) => {
    if (!req.query.key) {
      return next(ERRORS.KEY_REQUIRED());
    }

    next();
  },
};
