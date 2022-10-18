import React from 'react';

import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import {
  BuilderDisplay,
  DisplayContainer,
  ResultDisplay,
} from '@/components/functionComponents/Display/styled';

class _Display extends React.Component {
  render() {
    const { expression, result } = this.props;

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
  }
}

const mapStateToProps = (state) => ({
  expression: state.expression,
  result: state.result,
});

export const Display = connect(
  mapStateToProps,
  null,
)(_Display);

_Display.propTypes = {
  expression: Proptypes.object,
  result: Proptypes.object,
};
