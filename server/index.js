const express = require('express');
const app = express();
const path = require('path');
const api = require('./api.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));

app.listen(3001, () => {
  console.log('Listening on port 3001');
})