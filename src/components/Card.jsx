import React, { useState, useEffect } from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={props.card.image_uri} alt="card front" />
        <img className="back" src="/img/cover2.jpeg" alt="card back" />
      </div>
    </div>
  )
}

export default Card;