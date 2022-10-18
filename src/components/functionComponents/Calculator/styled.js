import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const CalculatorContainer = styled.div`
  width: ${baseTheme.width.wrapper};
  height: ${baseTheme.height.wrapper};
  padding: ${baseTheme.padding.wrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
