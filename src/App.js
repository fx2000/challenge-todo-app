import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

// Bootstrap Components
import {
  Container
} from 'react-bootstrap';

// Components
import Topbar from './components/Topbar/Topbar';

// Pages
import Tasks from './pages/Tasks/Tasks';
import View from './pages/Tasks/View';

class App extends Component {
  render() {
    return (
      <>
        <Topbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Tasks} />
            <Route exact path="/:id" component={View} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
