import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './route';
import { GlobalStoreContext, useStore } from './store';
import { User, Home, NoMatch } from './route';

const App = () => {
  const store = useStore();
  return (
    <GlobalStoreContext.Provider value={store}>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/:user(login)" component={User} />
              <PrivateRoute path="/" component={Home} exact />
              <Route component={NoMatch} />
            </Switch>
          )}
        />
      </BrowserRouter>
    </GlobalStoreContext.Provider>
  );
};

export default App;
