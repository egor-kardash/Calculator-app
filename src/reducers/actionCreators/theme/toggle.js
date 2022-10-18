import { TOGGLE } from '@/reducers/actionTypes/theme';

export const toggleTheme = (theme) => ({
  type: TOGGLE,
  payload: theme,
});
