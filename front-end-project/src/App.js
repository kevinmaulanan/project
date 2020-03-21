import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Restaurant from './pages/restaurant'
import Items from './pages/items'
import ForgotPassword from './pages/forgot-password'
import Profile from './pages/profile'

import history from './utility/history'
import CostumeNavBar from './Component/navbar'
import DetailRestaurant from './pages/detail-restaurant'
import DetailItems from './pages/detail-items'

import CheckUsername from './pages/check-username'

import EditProfile from './pages/edit-profile'
import EditUser from './pages/edit-user'
import EditItems from './pages/edit-items'
import EditRestaurant from './pages/edit-restaurant'


import DetailCategory from './pages/detail-category'
import FooterCostume from './Component/Footer'
import Category from './pages/category'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
    this.loginHandler = () => {
      this.setState({ login: true })
    }
    this.logoutHandler = () => {
      this.setState({ login: false })
    }
  }
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.setState({ login: true })
    } else {
      this.setState({ login: false })
    }
  }

  render() {
    return (
      <BrowserRouter >
        <Router history={history}>
          <Switch>
            <Route path="/login" render={(props) => <Login {...props} login={this.loginHandler} />} exact />
            <Route path="/register" render={(props) => <Register {...props} />} exact />
            <Route path="/check-username" render={(props) => <CheckUsername {...props} />} exact />
          </Switch>

          <CostumeNavBar isLogin={this.state.login} />
          <Switch>
            <Route path="/profile" render={(props) => <Profile {...props} />} exact />
          </Switch>


          <Switch>
            {/* <JumbrotronCostume /> */}
            {/* <Route exact path="/" render={(props) => (<Main {...props} />)} /> */}
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/home" render={(props) => <Home {...props} />} />


            <Route path="/edit-user" render={(props) => <EditUser {...props} />} exact />
            <Route path="/edit-profile" render={(props) => <EditProfile {...props} />} exact />

            <Route path="/restaurant" render={(props) => <Restaurant {...props} />} isLogin={this.state.login} exact />
            <Route path="/restaurant/:id" render={(props) => <DetailRestaurant {...props} />} exact />

            <Route path="/items" render={(props) => <Items {...props} />} exact />
            <Route path="/items/:id" render={(props) => <DetailItems {...props} />} exact />

            <Route path="/category" render={(props) => <Category {...props} />} exact />
            <Route path="/category/:id" render={(props) => <DetailCategory {...props} />} exact />

            <Route path="/edit-items" render={(props) => <EditItems {...props} />} exact />
            <Route path="/edit-restaurant" render={(props) => <EditRestaurant {...props} />} exact />
          </Switch>
          <FooterCostume />

        </Router>
        <Router history={history}>
          <Switch>
            <Route path="/forgot-password" render={(props) => <ForgotPassword {...props} />} exact />

          </Switch>
        </Router>
      </BrowserRouter >
    );
  }
}

export default App;
