import { WRITE_RESULT } from '@/reducers/actionTypes/result';

export const writeResult = (value) => ({
  type: WRITE_RESULT,
  payload: value,
});
