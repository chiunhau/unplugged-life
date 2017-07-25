import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SyncExample from '../SyncExample';
import AsyncExample from '../AsyncExample';
import './index.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <h1>Welcome to React Starter.</h1>
            <Link to="/sync-example"> SyncExample </Link>
            <Link to="/async-example"> AsyncExample </Link>
            <Route exact path="/sync-example" component={SyncExample} />
            <Route exact path="/async-example" component={AsyncExample} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
