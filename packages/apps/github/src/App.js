import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { CssBaseline } from '@iot/components';
import { PrivateRoute } from './route';
import { GlobalStoreContext, useStore } from './store';
import { User, Home, News, Profile, NoMatch } from './route';
import { useInterceptors } from './utils';

const AnimatRoute = ({ location }) => {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={{ width: '100vw', height: '100vh', ...props }}>
      <Switch location={location}>
        <Route path="/:user(login)" component={User} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/news" component={News} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </animated.div>
  ));
};

const App = () => {
  const store = useStore();

  // axios 拦截器设置
  useInterceptors(store);

  return (
    <GlobalStoreContext.Provider value={store}>
      <CssBaseline />
      <BrowserRouter>
        <Route component={AnimatRoute} />
      </BrowserRouter>
    </GlobalStoreContext.Provider>
  );
};

export default App;
