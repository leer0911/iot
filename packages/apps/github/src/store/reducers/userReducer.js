import { DESTROY } from './constants';

const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';

const userInitialState = {
  loaded: false,
  data: {},
  token: localStorage.getItem('TOKEN') || '',
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_SUCCESS: {
      return { ...state, data: { ...state.data, ...action.payload }, loaded: true };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;
      window.localStorage.setItem('TOKEN', token || '');
      return { ...state, token };
    }
    case DESTROY: {
      return { ...userInitialState, token: '' };
    }
    default: {
      return state;
    }
  }
};

export { userReducer, userInitialState, LOGIN_SUCCESS, FETCH_USER_INFO_SUCCESS };
