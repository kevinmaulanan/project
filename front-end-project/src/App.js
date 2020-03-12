import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'


function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
        <Route path="/register" render={(props) => (<Register {...props} />)} />
      </Switch>

    </BrowserRouter >
  );
}

export default App;
