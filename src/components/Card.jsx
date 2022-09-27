import React, { useState, useEffect } from 'react';

const Card = ({ card, handleSelect }) => {
  const handleClick = () => {
    handleSelect(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.image_uri} alt="card front" />
        <img className="back" src="/img/cover2.jpeg" onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}

export default Card;