import {TOGGLE_THEME} from '../types'

const initialState = {
    theme: 'light',
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_THEME:
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        return { ...state, theme: newTheme };
      default:
        return state;
    }
  };
  