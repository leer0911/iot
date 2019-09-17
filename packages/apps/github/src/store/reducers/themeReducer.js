const SET_THEME = 'SET_THEME';

const themeInitialState = {
  type: 'Dark',
};

const themeReducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return { ...state, type: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { themeReducer, themeInitialState, SET_THEME };
