import { SET_OPERATOR } from '@/reducers/actionTypes/operator';

export const setOperator = (value) => ({
  type: SET_OPERATOR,
  payload: value,
});
