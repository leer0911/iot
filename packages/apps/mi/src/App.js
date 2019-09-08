import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import { Button } from '@iot/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 2222<code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Test</Button>
      </header>
    </div>
  );
}

App.propTypes = {
  component: PropTypes.elementType,
};

export default App;
