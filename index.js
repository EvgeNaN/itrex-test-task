const express = require('express');

require('dotenv').config();

const app = express();

app.use(require('morgan')('dev'));
app.use(express.json());

require('./api/controllers')({ app });

app.use(require('./api/mw/error'));
app.use(require('./api/mw/not-found'));

app.listen(process.env.PORT, () => {
  console.dir(`> Server is running at port ${process.env.PORT}`);
});
