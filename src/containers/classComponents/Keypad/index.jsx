import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/classComponents/Button';
import { BUTTON_VALUES } from '@/constants/index';
import { KeypadContainer } from '@/containers/functionComponents/Keypad/styled';
import { getButtonClassName } from '@/helpers/getButtonClassName';
import {
  useCalculate,
  useClearLastSymbol,
  useWriteDown,
} from '@/hooks/index';
import { clearExpression } from '@/reducers/actionCreators/expression';
import { clearResult } from '@/reducers/actionCreators/result';

class _Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const {
      result,
      clearLastSymbol,
      clearExpression,
      clearResult,
      writeDown,
      calculate,
    } = this.props;

    switch (e.target.textContent) {
      case 'C': {
        clearExpression();
        clearResult();
        break;
      }
      case 'CE': {
        clearResult();
        break;
      }
      case '⌫': {
        clearLastSymbol(result);
        break;
      }
      case '=': {
        calculate();
        break;
      }
      default: {
        writeDown(e.target.textContent);
        break;
      }
    }
  };

  render() {
    return (
      <KeypadContainer>
        {BUTTON_VALUES.map((value, id) => (
          <Button
            key={id}
            value={value}
            funcHandler={this.clickHandler}
            className={getButtonClassName(value)}
          />
        ))}
      </KeypadContainer>
    );
  }
}

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

  const helperClearExpression = () => {
    dispatch(clearExpression());
  };

  const helperClearResult = () => {
    dispatch(clearResult());
  };

  return (
    <_Keypad
      clearExpression={helperClearExpression}
      clearResult={helperClearResult}
      writeDown={writeDown}
      clearLastSymbol={clearLastSymbol}
      calculate={calculate}
      result={result.currentResult}
    />
  );
};

_Keypad.propTypes = {
  clearExpression: PropTypes.func,
  clearResult: PropTypes.func,
  writeDown: PropTypes.func,
  clearLastSymbol: PropTypes.func,
  calculate: PropTypes.func,
  result: PropTypes.string,
  operator: PropTypes.bool,
};
