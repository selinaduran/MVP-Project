import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Form from './Form.jsx';
import Scores from './Scores.jsx';
const axios = require('axios');
const sampleSize = require('lodash.samplesize');

const App = () => {
  const [villagers, setVillagers] = useState([])
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)
  const [selectOne, setSelectOne] = useState(null)
  const [selectTwo, setSelectTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [name, setName] = useState("")
  const [scoreBoard, setScoreBoard] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // For matching game

  useEffect(() => {
    axios.get('https://acnhapi.com/v1/villagers')
      .then(response => {
        const newVillagers = Object.values(response.data);
        setVillagers(newVillagers);
        const randomSet = getRandomCardSet(newVillagers, 8);
        const randomSetCopy = randomSet.map((el) => {
          return {...el, id: el.id + "-copy"}
        })
        const newDeck = [...randomSet, ...randomSetCopy]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, matched: false }))
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
      setDisabled(true)
      if (selectOne.image_uri === selectTwo.image_uri) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.image_uri === selectOne.image_uri) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [selectOne, selectTwo])

  const resetTurn = () => {
    setSelectOne(null)
    setSelectTwo(null)
    setCounter(counter + 1)
    setDisabled(false)
  }

  // For form submission
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const scoreSubmit = (event) => {
    event.preventDefault();
    const newScore = {
      name: name,
      score: counter
    }

    axios.post('http://localhost:3001/addscore', newScore)
    .then(response => {
      setName("")
      setCounter(0)
      axios.get('http://localhost:3001/getscores')
        .then(response => {
          setScoreBoard(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // For scores
  useEffect(() => {
    axios.get('http://localhost:3001/getscores')
      .then(response => {
        setScoreBoard(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className="app">
        <div className="containerOne">
          <div className="header">
            <h1 className="game-title">Animal Crossing Memory Game!</h1>
            <p className="counter">Counter: {counter}</p>
          </div>
          <div className="game-board">
            {cards.map(card => (
              <Card key={card.id} card={card} handleSelect={handleSelect} flipped={card === selectOne || card === selectTwo || card.matched} disabled={disabled} />
            ))}
          </div>
          <div className="footer">
            <button onClick={handleOpen}>Submit Score</button>
            <button onClick={makeNewGame}>New Game</button>
          </div>
        </div>
        <div className="containerTwo">
          <Scores scoreBoard={scoreBoard}/>
        </div>
      </div>
      <div>
        <Form open={open} handleClose={handleClose} counter={counter} scoreSubmit={scoreSubmit} handleNameChange={handleNameChange} name={name} />
      </div>
    </>
  );
}

export default App;