const { ERRORS } = require('./constants');

module.exports = {
  create: (req, res, next) => {
    if (!req.body.value) {
      return next(ERRORS.VALUE_REQUIRED());
    }

    next();
  },
};
