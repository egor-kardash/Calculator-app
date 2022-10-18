import { SET_RESULT } from '@/reducers/actionTypes/result';

export const setResult = (result) => ({
  type: SET_RESULT,
  payload: result,
});
