import { SET_EXPRESSION } from '@/reducers/actionTypes/expression';

export const setExpression = (expression) => ({
  type: SET_EXPRESSION,
  payload: expression,
});
