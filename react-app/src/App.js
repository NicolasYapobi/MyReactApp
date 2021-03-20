import * as React from 'react';
import logo from './logo.svg';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Page from './components/Page';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/page" component={Page} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
