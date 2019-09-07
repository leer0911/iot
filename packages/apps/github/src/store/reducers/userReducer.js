import { DESTROY } from './constants';

const userInitialState = {
  userId: localStorage.getItem('USER_ID') || '',
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case DESTROY: {
      const userName = localStorage.getItem('USER_NAME');
      localStorage.clear();
      localStorage.setItem('USER_NAME', userName);
      return { ...userInitialState, userId: '' };
    }
    default: {
      return state;
    }
  }
};

export { userReducer, userInitialState };
