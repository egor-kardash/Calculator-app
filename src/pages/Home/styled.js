import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const Content = styled.div`
  width: ${baseTheme.width.content};
  height: ${baseTheme.height.content};
  padding: ${baseTheme.padding.content};
  display: flex;
  align-items: center;
  justify-content: center;
`;
