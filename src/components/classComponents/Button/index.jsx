import React from 'react';

import PropTypes from 'prop-types';

import { ButtonContainer } from '@/components/functionComponents/Button/styled';

export class Button extends React.Component {
  render() {
    const { value, funcHandler, className } = this.props;

    return (
      <ButtonContainer
        onClick={funcHandler}
        className={className}
      >
        {value}
      </ButtonContainer>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  funcHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
