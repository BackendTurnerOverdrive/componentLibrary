import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>);

App.propTypes = {
  logo: PropTypes.string,
};

App.defaultProps = {
  logo,
};

export default App;
