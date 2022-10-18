import React from 'react';

import PropTypes from 'prop-types';

import { ButtonContainer } from './styled';

export const Button = ({
  value,
  funcHandler,
  className,
}) => (
  <ButtonContainer
    onClick={funcHandler}
    className={className}
  >
    {value}
  </ButtonContainer>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  funcHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
