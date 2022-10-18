import { combineReducers } from 'redux';

import { expressionReducer } from './expressionReducer';
import { historyReducer } from './historyReducer';
import { operatorReducer } from './operatorReducer';
import { resultReducer } from './resultReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  expression: expressionReducer,
  result: resultReducer,
  operator: operatorReducer,
  history: historyReducer,
  theme: themeReducer,
});
