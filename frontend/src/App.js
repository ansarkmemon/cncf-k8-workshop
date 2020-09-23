import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './components/users'
import UserDetail from './components/user-detail';
import Posts from './components/posts';

import './App.scss';
import Navigation from './components/navigation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/user/:userId" component={UserDetail} />
          <Route exact path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
