const express = require('express');

require('dotenv').config();

const app = express();

app.use(require('morgan')('dev'));
app.use(express.json());

app.use(require('./api/controllers'))({ app });

app.use(require('./api/mw/not-found'));
app.use(require('./api/mw/error'));

app.listen(process.env.PORT, () => {
  console.dir(`> Server is running at port ${process.env.PORT}`);
});
