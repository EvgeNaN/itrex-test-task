const express = require('express');

const Stack = require('../../../services/stack');

const validators = require('../../mw/validators/stack');

const router = express();

const stack = new Stack();

module.exports = () => {
  router.get('/', (req, res, next) => {
    try {
      res.json(stack.pop());
    } catch (e) {
      next(e);
    }
  });

  router.post('/', validators.create, (req, res, next) => {
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
