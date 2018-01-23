import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import TodoListContainer from './containers/todo-list';
import CreateTodo from './containers/create-todo';
import EditTodo from './containers/edit-todo';
import TodoDetails from './containers/todo-details/TodoDetailsContainer';
import { GoogleLogin } from 'react-google-login';
import { ensureUserAuthorized, authorizeUser } from './utils/authorization';

class App extends Component {
  constructor(...args) {
    super(...args);
    const isAuthorized = ensureUserAuthorized();
    this.state = { isAuthorized };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(loginResponse) {
    authorizeUser(loginResponse);
    this.setState({ isAuthorized: true });
  }
  render() {
    const { isAuthorized } = this.state;

    return isAuthorized ? (
      <Router>
        <Switch>
          <Route exact path="/" component={TodoListContainer}/>
          <Route exact path="/create" component={CreateTodo}/>
          <Route exact path="/edit/:id" component={EditTodo}/>
          <Route exact path="/details/:id" component={TodoDetails}/>
        </Switch>
      </Router>
    ) : (
      <GoogleLogin
        clientId="561976334891-r7elktn0f64jefp8c95q99jdoli6pgmu.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.handleLogin}
        onFailure={(err) => { console.log(err) }}
        scope="https://www.googleapis.com/auth/calendar"
        className="button loginButton"
      />
    );
  }
}

export default App;
