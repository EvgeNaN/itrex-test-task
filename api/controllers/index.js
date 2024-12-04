module.exports = ({ app }) => {
  app.use('/stack', require('./stack')());
  app.use('/key-value', require('./key-value')());
};
