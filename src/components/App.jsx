import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
const axios = require('axios');
const sampleSize = require('lodash.samplesize');

const App = () => {
  const [villagers, setVillagers] = useState([])
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)
  const [selectOne, setSelectOne] = useState(null)
  const [selectTwo, setSelectTwo] = useState(null)

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

  const makeNewGame = (event) => {
    window.location.reload()
  }

  const handleSelect = (card) => {
    selectOne ? setSelectTwo(card) : setSelectOne(card)
  }

  useEffect(() => {
    if (selectOne && selectTwo) {
      if (selectOne.image_uri === selectTwo.image_uri) {
        console.log('You got a match!');
        resetTurn()
      } else {
        console.log('Sorry, try again!')
        resetTurn()
      }
    }
  }, [selectOne, selectTwo])

  const resetTurn = () => {
    setSelectOne(null)
    setSelectTwo(null)
    setCounter(counter + 1)
  }

  return (
    <div className="app">
      <h1 className="game-title">Animal Crossing Memory Match!</h1>
      <div className="game-board">
        {cards.map(card => (
          <Card key={card.id} card={card} handleSelect={handleSelect}/>
        ))}
      </div>
      <div>
        <button>Submit Score</button>
        <button onClick={makeNewGame}>New Game</button>
      </div>
    </div>
  );
}

export default App;