import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
