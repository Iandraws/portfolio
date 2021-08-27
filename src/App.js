import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome/Welcome';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { User } from './components/User/User';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>

        <hr />

        {}
        <Switch>
          <Route exact path='/users'>
            <Welcome />
          </Route>
          <Route path='/users/:id'>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
