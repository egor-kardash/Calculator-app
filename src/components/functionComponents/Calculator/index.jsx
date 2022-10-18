import React from 'react';

import PropTypes from 'prop-types';

import { CalculatorContainer } from './styled';

export const Calculator = ({ children }) => (
  <CalculatorContainer>{children}</CalculatorContainer>
);

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};
