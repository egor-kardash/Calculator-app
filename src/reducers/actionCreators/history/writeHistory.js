import { WRITE_HISTORY } from '@/reducers/actionTypes/history';

export const writeHistory = (value) => ({
  type: WRITE_HISTORY,
  payload: value,
});
