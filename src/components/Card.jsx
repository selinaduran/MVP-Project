import React, { useState, useEffect } from 'react';

const Card = ({ card, handleSelect, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelect(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.image_uri} alt="card front" />
        <img className="back" src="/img/cover2.jpeg" onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}

export default Card;