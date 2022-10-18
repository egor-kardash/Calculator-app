import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { KeypadContainer } from './styled';

import { Button } from '@/components/functionComponents/Button';
import { BUTTON_VALUES } from '@/constants/index';
import { getButtonClassName } from '@/helpers/getButtonClassName';
import {
  useCalculate,
  useClearLastSymbol,
  useWriteDown,
} from '@/hooks/index';
import { clearExpression } from '@/reducers/actionCreators/expression';
import { clearResult } from '@/reducers/actionCreators/result';

export const Keypad = () => {
  const expression = useSelector(
    (state) => state.expression,
  );
  const result = useSelector((state) => state.result);
  const operator = useSelector((state) => state.operator);

  const dispatch = useDispatch();
  const writeDown = useWriteDown(
    dispatch,
    expression,
    result,
    operator,
  );
  const clearLastSymbol = useClearLastSymbol(dispatch);
  const calculate = useCalculate(
    dispatch,
    expression,
    result,
    operator,
  );

  const expr = expression.currentExpression;

  useEffect(() => {
    console.log(expr);
  }, [expr]);

  const clickHandler = (e) => {
    switch (e.target.textContent) {
      case 'C': {
        dispatch(clearExpression());
        dispatch(clearResult());
        break;
      }
      case 'CE': {
        dispatch(clearResult());
        break;
      }
      case '⌫': {
        clearLastSymbol(result.currentResult);
        break;
      }
      case '=': {
        console.log(`Answer = ${expr}`);
        calculate();
        break;
      }
      default: {
        writeDown(e.target.textContent);
        break;
      }
    }
  };

  return (
    <KeypadContainer>
      {BUTTON_VALUES.map((value, id) => (
        <Button
          key={id}
          value={value}
          funcHandler={clickHandler}
          className={getButtonClassName(value)}
        />
      ))}
    </KeypadContainer>
  );
};
