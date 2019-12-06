import React, { useState } from 'react';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
import './App.css';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  const addBall = () => {
    if (ball < 4){
      setBall(ball + 1)
    }
    else {
      setBall(ball - ball);
      setStrike(strike - strike)
    } 
  }

  const addStrike = () => {
        if (strike < 3){
      setStrike(strike + 1)
    }
    else {
      setStrike(strike - strike);
      setBall(ball - ball)
    } 
  }

  const addHit = () => {
    setStrike(0);
    setBall(0)
  }

  const addFoul = () => {
    if (strike < 2){
      setStrike(strike + 1)
    }
    else if (strike > 2){
      setStrike(3)
    }
    else { setStrike(2)}
  }

  return (
    <div className="App">
      <Display
      ball={ball}
      strike={strike}/>
      <Dashboard 
      addBall={addBall}
      addStrike={addStrike}
      addHit={addHit}
      addFoul={addFoul}/>
    </div>
  );
}

export default App;
