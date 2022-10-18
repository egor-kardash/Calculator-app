import { CLEAR_HISTORY } from '@/reducers/actionTypes/history';

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
  payload: '',
});
