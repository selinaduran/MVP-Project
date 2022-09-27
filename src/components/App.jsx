import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
const axios = require('axios');
const sampleSize = require('lodash.samplesize');

const App = () => {
  const [villagers, setVillagers] = useState([])
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('https://acnhapi.com/v1/villagers')
      .then(response => {
        const newVillagers = Object.values(response.data);
        setVillagers(newVillagers);
        const randomSet = getRandomCardSet(newVillagers, 6);
        const newDeck = [...randomSet, ...randomSet]
          .sort(() => Math.random() - 0.5);
        setCards(newDeck);
        setCounter(0);
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
      <div className="game-board">
        {cards.map(card => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
      <div>
        <button>Submit Score</button>
        <button>New Game</button>
      </div>
    </div>
  );
}

export default App;