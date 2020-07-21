import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/404';

const App = () =>  {
    return (
      <GithubState>
        <AlertState>
          <Router>
              <div className="App">
                <NavBar />
                  <div className="container">
                    <Alert />
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/user/:login" component={User} />
                          <Route component={NotFound} />
                      </Switch>
                  </div>
              </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}

export default App;
