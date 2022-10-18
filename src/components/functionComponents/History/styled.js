import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const ListContainer = styled.ul`
  list-style-type: none;
  color: unset;
`;

export const ListItem = styled.li`
  font-size: calc(18px + 16 * (100vw / 1920));
  font: ${baseTheme.font};
  user-select: none;
  padding: ${baseTheme.padding.history};
`;
