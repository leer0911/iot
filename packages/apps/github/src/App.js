import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@iot/components';
import { PrivateRoute } from './route';
import { GlobalStoreContext, useStore } from './store';
import { User, Home, NoMatch } from './route';
import { useInterceptors } from './utils';

const App = () => {
  const store = useStore();

  // axios 拦截器设置
  useInterceptors(store);

  return (
    <GlobalStoreContext.Provider value={store}>
      <CssBaseline />
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
