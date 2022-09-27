const express = require('express');
const app = express();
const path = require('path');
const api = require('./api.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/v1/villagers', (req, res) => {
  api.getVillagerData('v1/villagers')
  .then(response => { res.status(200).send(response.data) })
  .catch(err => console.log(err))
})

app.listen(3001, () => {
  console.log('Listening on port 3001');
})