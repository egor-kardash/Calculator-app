import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const DisplayContainer = styled.div`
  width: ${baseTheme.width.display};
  min-height: ${baseTheme.height.display};
  font-size: calc(42px + 22 * (100vw / 1920));
  font: ${baseTheme.font};
  color: unset;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: ${baseTheme.border.radius.display};
  border: ${baseTheme.border.width.large} solid
    ${({ theme }) => theme.button};
  border-bottom: none;

  @media (max-width: ${baseTheme.size.tablet}) {
    width: ${baseTheme.width.mobileDisplay};
  }
`;

export const BuilderDisplay = styled.div`
  padding: ${baseTheme.padding.display};
  font-size: ${baseTheme.fontSize.builderDisplay};
  user-select: none;
  align-self: flex-end;
  opacity: 0.7;
`;

export const ResultDisplay = styled.div`
  padding: ${baseTheme.padding.display};
  user-select: none;
  display: flex;
  align-self: flex-end;
`;
