import React, { useState, useEffect } from 'react';
const axios = require('axios');
const sampleSize = require('lodash.samplesize');

const App = () => {
  const [villagers, setVillagers] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('https://acnhapi.com/v1/villagers')
      .then(response => {
        const newVillagers = Object.values(response.data);
        setVillagers(newVillagers);
        const newDeck = getRandomCardSet(newVillagers, 8);
        setCards(newDeck);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const getRandomCardSet = (arr, num) => {
    let copy = arr.slice();
    const shuffled = sampleSize(copy, num)
    return shuffled;
  }

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