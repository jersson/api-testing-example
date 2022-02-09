'use strict';
const express = require('express');
const app = express();
const router = require('./router');

app.disable('x-powered-by');
app.use(router);

app.listen(3000, () => {
  console.log('Running on the port 3000...');
});
