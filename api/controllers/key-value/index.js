const express = require('express');

const KeyValue = require('../../../services/key-value');

const validators = require('../../mw/validators/key-value');

const { ERRORS } = require('./constants');

const router = express();

const keyValue = new KeyValue();

module.exports = () => {
  router.get('/', validators.get, (req, res, next) => {
    if (!keyValue.isExists(req.query.key)) {
      return next(ERRORS.NOT_FOUND());
    }
      
    res.json(keyValue.get(req.query.key));
  });

  router.post('/', validators.create, (req, res) => {
    const { key, value, ttl } = req.body;

    keyValue.add(key, value, ttl);

    res.status(201).json({
      success: true,
    });
  });

  router.delete('/', validators.delete, (req, res) => {
    keyValue.delete(req.query.key);

    res.status(204).send();
  });
  
  return router;
};
