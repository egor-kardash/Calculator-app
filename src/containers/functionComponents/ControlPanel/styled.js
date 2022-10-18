import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const ControlPanelContainer = styled.div`
  width: calc(250px + 150 * (100vw / 1920));
  height: ${baseTheme.height.controlPanel};
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  border-left: ${baseTheme.border.width.large} solid
    ${baseTheme.colors.lightGrey};

  @media (max-width: ${baseTheme.size.tablet}) {
    display: none;
  }
`;

export const StyledName = styled.div`
  text-align: center;
  padding: ${baseTheme.padding.historyName};
  font-size: calc(32px + 26 * (100vw / 1920));
  font: ${baseTheme.font};
  color: unset;
  user-select: none;
`;

export const TrashIcon = styled.div`
  cursor: pointer;
  mask: url('${process.env.PUBLIC_URL}/assets/trash.svg');
  width: calc(32px + 20 * (100vw / 1920));
  height: calc(32px + 20 * (100vw / 1920));
  right: ${baseTheme.position.right.trashIcon};
  bottom: ${baseTheme.position.bottom.trachIcon};
  background-color: ${({ theme }) => theme.text};
  position: fixed;

  &:hover {
    background-color: red;
  }
`;

export const HistoryToggleIcon = styled.div`
  cursor: pointer;
  mask: url(${({ isHidden }) => (isHidden ? `${process.env.PUBLIC_URL}/assets/arrow-left.svg` : `${process.env.PUBLIC_URL}/assets/close-o.svg`)});
  position: fixed;
  right: ${baseTheme.position.right.historyToggleIcon};
  top: ${baseTheme.position.top.historyToggleIcon};
  width: calc(32px + 20 * (100vw / 1920));
  height: calc(32px + 20 * (100vw / 1920));
  background-color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ isHidden }) => (isHidden ? 'green' : 'red')};
  }

  @media (max-width: ${baseTheme.size.tablet}) {
    display: none;
  }
`;
