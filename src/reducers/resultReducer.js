import {
  CLEAR_RESULT,
  SET_RESULT,
  WRITE_RESULT,
} from './actionTypes/result';

const initialState = {
  currentResult: '',
};

export const resultReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case WRITE_RESULT: {
      return {
        ...state,
        currentResult: state.currentResult + payload,
      };
    }
    case SET_RESULT: {
      return { ...state, currentResult: payload };
    }
    case CLEAR_RESULT: {
      return { ...state, currentResult: '' };
    }
    default: {
      return state;
    }
  }
};
