import React, { useState, useEffect } from 'react';

const Villagers = ({ foundVillagers }) => {
  return (
    <div className="villager-board">
      <h2 className="score-board-title"><img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/>Villagers<img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/></h2>
      <h3>Meet your friends!</h3>
      <ol>
        {foundVillagers.map(villager => {
          return <li className="score-name">{villager.name["name-USen"]}</li>
        })}
      </ol>
    </div>
  )
}

export default Villagers;