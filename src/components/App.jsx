import React, { useState, useEffect } from 'react';
const axios = require('axios');

const App = () => {
  const [villagers, setVillagers] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('https://acnhapi.com/v1/villagers')
      .then(response => {
        console.log('show data = ', response.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="app">
      <h1 className="game-title">Animal Crossing Memory Match!</h1>
      <div>
        <button>Submit Score</button>
        <button>New Game</button>
      </div>
    </div>
  );
}

export default App;