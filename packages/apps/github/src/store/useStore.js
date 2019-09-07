import { useReducer } from 'react';
import { userReducer, userInitialState } from './reducers';

const combineDispatches = dispatches => {
  if (!Array.isArray(dispatches)) {
    throw new Error('dispatches must be an array');
  }
  return action => {
    for (let i = 0; i < dispatches.length; i += 1) {
      dispatches[i](action);
    }
  };
};

const useStore = () => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const dispatch = combineDispatches([userDispatch]);
  const store = {
    userState,
    userDispatch,
    dispatch,
  };

  return store;
};

export default useStore;
