import React from 'react';

import PropTypes from 'prop-types';

import { CalculatorContainer } from '@/components/functionComponents/Calculator/styled';

export class Calculator extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <CalculatorContainer>{children}</CalculatorContainer>
    );
  }
}

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};
