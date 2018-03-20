import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import PrvniStranka from './pages/PrvniStranka.jsx';
import DruhaStranka from './pages/DruhaStranka.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>{"První stránka"}</Link>
        <Link to={'/druha'}>{"Druhá stránka"}</Link>
        <Switch>
          <Route exact path='/' component={PrvniStranka}/>
          <Route path='/druha' component={DruhaStranka}/>
        </Switch>
      </div>
    );
  }
}

export default App;
