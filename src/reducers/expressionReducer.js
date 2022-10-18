import {
  CLEAR_EXPRESSION,
  SET_EXPRESSION,
  WRITE_EXPRESSION,
} from '@/reducers/actionTypes/expression';

const initialState = {
  currentExpression: '',
};

export const expressionReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case WRITE_EXPRESSION: {
      return {
        ...state,
        currentExpression:
          state.currentExpression + payload,
      };
    }
    case SET_EXPRESSION: {
      return { ...state, currentExpression: payload };
    }
    case CLEAR_EXPRESSION: {
      return { ...state, currentExpression: '' };
    }
    default: {
      return state;
    }
  }
};
