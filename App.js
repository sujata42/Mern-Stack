import React, { useState } from 'react';
import './App.css'

function App() {
  const [votes, setVotes] = useState({ A: 0, B: 0, C: 0 });

  const handleVote = (party) => {
    setVotes(prev => ({ ...prev, [party]: prev[party] + 1 }));
  };

  const getWinner = () => {
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    return winner;
  };

  return (
    <div>
      <h1>Vote for Your Party</h1>
      <button onClick={() => handleVote('A')}>Vote for Party A</button>
      <button onClick={() => handleVote('B')}>Vote for Party B</button>
      <button onClick={() => handleVote('C')}>Vote for Party C</button>

      <div>
        <p>Party A: {votes.A} votes</p>
        <p>Party B: {votes.B} votes</p>
        <p>Party C: {votes.C} votes</p>

        <h2>Winner: Party {getWinner()}</h2>

      </div>
      
    </div>
  );
}

export default App;
