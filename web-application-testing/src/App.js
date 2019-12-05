import React, { useState } from 'react';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
import './App.css';

function App() {
  const [balls, setballs] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <Display/>
      <Dashboard/>
    </div>
  );
}

export default App;
