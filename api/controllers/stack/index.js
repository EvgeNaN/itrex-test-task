const express = require('express');

const { ERRORS } = require('./constants');

const router = express();

module.exports = () => {
  return router;
};
