const express = require('express');
const app = express();

app.use('/', require('./routes'));


app.listen(3000,() => {
  console.log('server is running on port 3000');
})