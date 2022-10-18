import { OPERATIONS } from '@/constants/operations';
import {
  clearExpression,
  setExpression,
  writeExpression,
} from '@/reducers/actionCreators/expression';
import { setOperator } from '@/reducers/actionCreators/operator';
import {
  clearResult,
  setResult,
  writeResult,
} from '@/reducers/actionCreators/result';

export const useWriteDown = (
  dispatch,
  expression,
  result,
  operator,
) => (value) => {
  const expr = expression.currentExpression;
  const res = result.currentResult;
  const hasOperator = operator.hasValue;

  if (
    res === 'Error'
    || res === 'Infinity'
    || expr[expr.length - 1] === '='
  ) {
    dispatch(clearExpression());
    dispatch(clearResult());
  }

  if (value === '(') {
    dispatch(writeExpression(value));
    return;
  }

  if (value === ')') {
    if (!expr || !expr.includes('(')) {
      return;
    }
    if (
      expr.match(/[(]/g)?.length
      > expr.match(/[)]/g)?.length
    ) {
      if (
        isNaN(expr[expr.length - 1])
        && expr[expr.length - 1] !== ')'
      ) {
        dispatch(writeExpression(res + value));
        return;
      }
      dispatch(writeExpression(value));
      return;
    }
    if (
      isNaN(expr[expr.length - 1])
      && expr[expr.length - 1] !== ')'
    ) {
      dispatch(writeExpression(res + value));
      return;
    }
  }

  if (OPERATIONS.includes(value)) {
    if (!hasOperator) {
      if (expr[expr.length - 1] === ')') {
        dispatch(writeExpression(value));
        dispatch(setOperator(true));
        return;
      }
      dispatch(writeExpression(res + value));
      dispatch(setOperator(true));
      return;
    }
    if (expr[expr.length - 1] === '(' && res === '') {
      dispatch(writeExpression(0 + value));
      dispatch(setOperator(true));
      return;
    }
    if (OPERATIONS.includes(expr[expr.length - 1])) {
      if (expr[expr.length - 1] !== '(') {
        dispatch(setExpression(expr.slice(0, -1) + value));
        dispatch(setOperator(true));
      } else {
        dispatch(writeExpression(value));
        dispatch(setOperator(true));
      }
      dispatch(setOperator(true));
    }
  }

  if (value === '.') {
    if (res.includes('.')) return;
    if (res === '') {
      dispatch(writeResult(0 + value));
      return;
    }
    if (!res.includes('.')) {
      dispatch(writeResult(value));
      return;
    }
  }

  if (!OPERATIONS.includes(value)) {
    if (hasOperator) {
      dispatch(clearResult());
      dispatch(setOperator(false));
    }
    dispatch(writeResult(value));
  }
  if (value === '+/-') {
    if (res[res.length - 1] === '.') {
      dispatch(setResult(`${-1 * res}.`));
    } else {
      dispatch(setResult((-1 * res).toString()));
    }
  }
};
