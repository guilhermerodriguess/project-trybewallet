import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
