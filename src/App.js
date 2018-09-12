import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import ClassNavigation from './ClassNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Sidebar navigation={<TopNavigation selectedKey="classes" />} />
        <Sidebar navigation={<ClassNavigation selectedKey="classes" />} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
