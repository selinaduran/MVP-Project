const express = require('express');
const app = express();
const path = require('path');
const api = require('./api.js');
const sql = require('./acgame.js');
const Game = require('./models/Game.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/v1/villagers', (req, res) => {
  api.getVillagerData('v1/villagers')
  .then(response => { res.status(200).send(response.data) })
  .catch(err => console.log(err))
})

app.post('/addscore', (req, res) => {
  console.log("show req body", req.body)
  const newScore = req.body;
  Game.submitScore(newScore)
  .then(response => {
    res.status(201).send();
  })
  .catch(err => console.log(err));
})

app.get('/getscores', (req, res) => {
  Game.retrieveScores()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send(err)
  })
})

app.listen(3001, () => {
  console.log('Listening on port 3001');
})