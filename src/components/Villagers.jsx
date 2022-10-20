import React, { useState, useEffect } from 'react';
import Villager from './Villager.jsx';
import Dialog from '@mui/material/Dialog';

const Villagers = ({ foundVillagers }) => {
  return (
    <div className="villager-board">
      <h2 className="score-board-title"><img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/>Villagers<img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/></h2>
      <h3>Meet your friends!</h3>
      <ul>
        {foundVillagers.map((villager, index) => {
          return <Villager villager={villager} key={index}/>
        })}
      </ul>
    </div>
  )
}

export default Villagers;