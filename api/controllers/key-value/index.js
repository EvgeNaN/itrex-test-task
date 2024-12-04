const express = require('express');

const KeyValue = require('../../../services/key-value');

const validators = require('../../mw/validators/key-value');

const { ERRORS } = require('./constants');

const router = express();

const keyValue = new KeyValue();

module.exports = () => {
  router.get('/', validators.get, (req, res, next) => {
    try {
      if (!keyValue.isExists(req.query.key)) {
        return next(ERRORS.NOT_FOUND());
      }
      
      return res.json({
        value: keyValue.get(req.query.key),
      });
    } catch (e) {
      next(e);
    }
  });

  router.post('/', validators.create, (req, res, next) => {
    try {
      const { key, value, ttl } = req.body;

      keyValue.add(key, value, ttl);

      return res.status(201).json({
        success: true,
      });
    } catch (e) {
      next(e);
    }
  });

  router.delete('/', validators.delete, (req, res, next) => {
    try {
      keyValue.delete(req.query.key);

      return res.status(204).json({
        success: true,
      });
    } catch (e) {
      next(e);
    }
  });
  
  return router;
};
