const express = require('express');

const Stack = require('../../../services/stack');

const { ERRORS } = require('./constants');

const router = express();

const stack = new Stack();

module.exports = () => {
  router.get('/', (req, res, next) => {
    try {
      res.json({
        value: stack.pop(),
      });
    } catch (e) {
      next(e);
    }
  });

  router.post('/', (req, res, next) => {
    if (req.body.value === void 0) {
      return next(ERRORS.VALUE_REQUIRED());
    }

    try {
      stack.push(req.body.value);

      res.status(201).json({
        success: true,
      });
    } catch (e) {
      next(e);
    }
  });

  return router;
};
