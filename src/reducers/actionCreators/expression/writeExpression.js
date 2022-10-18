import { WRITE_EXPRESSION } from '@/reducers/actionTypes/expression';

export const writeExpression = (value) => ({
  type: WRITE_EXPRESSION,
  payload: value,
});
