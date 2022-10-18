import {
  clearExpression,
  writeExpression,
} from '@/reducers/actionCreators/expression';
import { writeHistory } from '@/reducers/actionCreators/history';
import { setResult } from '@/reducers/actionCreators/result';
import { getAnswer } from '@/utils/Logic';

export const useCalculate = (
  dispatch,
  expression,
  result,
) => () => {
  const expr = expression.currentExpression;
  const res = result.currentResult;
  const operations = ['+', '-', '%', '*', '/'];
  let answer;
  let history;

  if (operations.includes(expr[expr.length - 1])) {
    dispatch(writeExpression(res));
    history = expr + res;
    answer = getAnswer(history);
  } else if (expr[expr.length - 1] === ')') {
    history = expr;
    answer = getAnswer(history);
  } else {
    dispatch(writeExpression(res));
    history = expr;
    answer = getAnswer(history);
  }
  if (expr !== '') {
    dispatch(writeExpression('='));
  }

  if (answer === 'Error') {
    dispatch(clearExpression());
    dispatch(setResult(answer));
  } else {
    dispatch(setResult(answer));
    dispatch(writeHistory(history));
  }
};
