module.exports = (req, res) => {
  res.status(404).json({
    message: 'Endpoint Not Found',
  });
};
