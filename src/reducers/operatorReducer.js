import { SET_OPERATOR } from '@/reducers/actionTypes/operator';

const initialState = {
  hasValue: false,
};

export const operatorReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_OPERATOR: {
      return { ...state, hasValue: payload };
    }
    default: {
      return state;
    }
  }
};
