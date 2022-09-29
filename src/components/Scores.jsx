import React, { useState, useEffect } from 'react';

const Scores = ({ scoreBoard }) => {
  return (
    <div className="score-board">
      <h2 className="score-board-title"><img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/>Leaderboard<img className="gyroid-pic" src="/img/ac-gyroid.png" alt="gyroid"/></h2>
      <h3>(Top 10 Scores)</h3>
      <ol>
        {scoreBoard.map(score => {
          return <li className="score-name">{score.name}- {score.score}</li>
        })}
      </ol>
    </div>
  )
}

export default Scores;