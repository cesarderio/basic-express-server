'use strtict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());


app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!!!');
});



function start(){
  app.listen(PORT, () => console.log('listening on port: ', PORT));
}

module.exports = { start, app };
