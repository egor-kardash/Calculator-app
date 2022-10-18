import { TOGGLE } from './actionTypes/theme';

const initialState = {
  currentTheme: '',
};

export const themeReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case TOGGLE: {
      return { ...state, currentTheme: payload };
    }
    default: {
      return state;
    }
  }
};
