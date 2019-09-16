import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { CssBaseline, useClasses, ThemeContext, createTheme } from '@iot/components';
import { red } from '@iot/components/src/colors';

import { PrivateRoute } from './route';
import { GlobalStoreContext, useStore } from './store';
import { NoMatch, User, Home, News, Profile, Notification, Issue } from './route';
import { useInterceptors } from './utils';

const styles = theme => ({
  root: {
    position: 'absolute',
    willChange: 'transform',
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: theme.shadows[5],
  },
});

const AnimatRoute = ({ location, history, match }) => {
  const classes = useClasses(styles);
  const { action } = history;
  const from = action === 'POP' ? -100 : 100;
  const leave = action === 'POP' ? 50 : -50;

  const transitions = useTransition(location, location => location.pathname, {
    config: { mass: 1, tension: 500, friction: 20, clamp: true },
    from: { transform: `translate3d(${from}%,0,0)` },
    enter: { transform: `translate3d(0%,0,0)` },
    leave: { transform: `translate3d(${leave}%,0,0)` },
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props} className={classes.root}>
      <Switch location={item}>
        <Route path="/:user(login)" component={User} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/news" component={News} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/notifications" component={Notification} />
        <PrivateRoute path="/issues" component={Issue} />
        <Route component={NoMatch} />
      </Switch>
    </animated.div>
  ));
};

const userTheme = createTheme({
  palette: {
    secondary: {
      main: red.A400,
    },
  },
});

const App = () => {
  const store = useStore();

  // axios 拦截器设置
  useInterceptors(store);

  return (
    <ThemeContext.Provider value={userTheme}>
      <GlobalStoreContext.Provider value={store}>
        <CssBaseline />
        <BrowserRouter>
          <Route component={AnimatRoute} />
        </BrowserRouter>
      </GlobalStoreContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
