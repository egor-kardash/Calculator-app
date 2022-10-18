import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const KeypadContainer = styled.div`
  width: ${baseTheme.width.keypad};
  height: ${baseTheme.height.keypad};
  display: inline-grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: unset;

  @media (max-width: ${baseTheme.size.tablet}) {
    width: ${baseTheme.width.mobileKeypad};
    height: ${baseTheme.height.mobileKeypad};
  }
`;
