import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from '@iot/router';
import { CssBaseline } from '@iot/components';
import { Home } from './container';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
      <CssBaseline />
    </>
  );
}

App.propTypes = {
  component: PropTypes.elementType,
};

export default App;
