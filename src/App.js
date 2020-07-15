import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';


class  App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
    
  }
  // componentDidMount(){
  //   this.setState({loading: true});

  //   fetch(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`)
  //   .then(res => res.json()).then(data => this.setState({users: data, loading: false}))
  // }

  //Search GitHub Users
  searchUsers = async text => {
    this.setState({ loading: true })

    fetch(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`)
    .then(res => res.json()).then(data => this.setState({users: data.items, loading: false}))
  }
  //Get Single User
  getUser = async(username) => {
    this.setState({ loading: true })

    fetch(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`)
    .then(res => res.json()).then(data => this.setState({user: data, loading: false}))
  }
  //Clear Users
  clearUsers = async () => {
    this.setState({ users: [], loading: false })
  }

  //Setting Alert
  setAlert = (msg, type) => {
    this.setState({alert: { msg, type }})

    setTimeout(() => this.setState({ alert: null }), 5000)
  }
  //Get Single User
  getUserRepos = async(username) => {
    this.setState({ loading: true })

    fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`)
    .then(res => res.json()).then(data => this.setState({repos: data, loading: false}))
  }

  render(){
    const { users, user, repos, loading } = this.state;
    return (
      <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                setAlert={this.setAlert}
                showClear={users.length > 0 ? true : false } />
                <Users loading={loading} users={users} />
              </>
            )} />

          </Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (
            <User 
            {...props} 
            getUser={this.getUser}
            getUserRepos={this.getUserRepos} 
            user={user}
            repos={repos} 
            loading={loading} />
          )} />
        </div>
      </div>
      </Router>
      
    );
  }
  
}

export default App;
