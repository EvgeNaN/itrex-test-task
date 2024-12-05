const express = require('express');

const Stack = require('../../../services/stack');

const validators = require('../../mw/validators/stack');

const router = express();

const stack = new Stack();

module.exports = () => {
  router.get('/', (req, res) => {
    res.json(stack.pop());
  });

  router.post('/', validators.create, (req, res) => {
    stack.push(req.body.value);

    res.status(201).json({
      success: true,
    });
  });

  return router;
};
