import {
  CLEAR_HISTORY,
  WRITE_HISTORY,
} from '@/reducers/actionTypes/history';

const initialState = {
  currentValue: [],
};

export const historyReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case WRITE_HISTORY: {
      return {
        ...state,
        currentValue: [...state.currentValue, payload],
      };
    }
    case CLEAR_HISTORY: {
      return { ...state, currentValue: [] };
    }
    default: {
      return state;
    }
  }
};
