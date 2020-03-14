import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Restaurant from './pages/restaurant'
import Items from './pages/items'
import ForgotPassword from './pages/forgot-password'
import Profile from './pages/profile'
import Main from './pages/Main'



function App() {

  return (

    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" render={(props) => (<Main {...props} />)} /> */}
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
        <Route path="/forgot-password" render={(props) => (<ForgotPassword {...props} />)} />
        <Route path="/register" render={(props) => (<Register {...props} />)} />
        <Route path="/restaurant" render={(props) => (<Restaurant {...props} />)} />
        <Route path="/items" render={(props) => (<Items {...props} />)} />
        <Route path="/profile" render={(props) => (<Profile {...props} />)} />


      </Switch>

    </BrowserRouter >
  );
}

export default App;
