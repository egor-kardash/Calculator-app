import React from 'react';

import { useSelector } from 'react-redux';

import {
  BuilderDisplay,
  DisplayContainer,
  ResultDisplay,
} from './styled';

export const Display = () => {
  const expression = useSelector(
    (state) => state.expression,
  );
  const result = useSelector((state) => state.result);

  return (
    <DisplayContainer>
      <BuilderDisplay>
        {expression.currentExpression}
      </BuilderDisplay>
      <ResultDisplay>
        {result.currentResult || 0}
      </ResultDisplay>
    </DisplayContainer>
  );
};
