import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const ButtonContainer = styled.button`
  font-size: ${baseTheme.fontSize.basic};
  font: ${baseTheme.font};
  user-select: none;
  cursor: pointer;
  border: none;

  @media (max-width: ${baseTheme.size.laptopL}) {
    font-size: ${baseTheme.fontSize.laptopL};
  }

  @media (max-width: ${baseTheme.size.laptop}) {
    font-size: ${baseTheme.fontSize.laptop};
  }

  @media (max-width: ${baseTheme.size.tablet}) {
    font-size: ${baseTheme.fontSize.tablet};
  }

  &.zero {
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: ${baseTheme.border.radius.zeroButton};
  }

  &.equals {
    border-radius: ${baseTheme.border.radius.equalsButton};
  }
`;
