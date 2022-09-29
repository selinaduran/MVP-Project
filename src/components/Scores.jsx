import React, { useState, useEffect } from 'react';

const Scores = ({ scoreBoard }) => {
  return (
    <div className="score-board">
      <h3>Leaderboard</h3>
      <h4>(Top 10 Scores)</h4>
      <ol>
        {scoreBoard.map(score => {
          return <li className="score-name">{score.name}- {score.score}</li>
        })}
      </ol>
    </div>
  )
}

export default Scores;