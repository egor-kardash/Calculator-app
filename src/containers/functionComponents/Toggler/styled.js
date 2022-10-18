import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const TogglerIcon = styled.div`
  width: ${baseTheme.width.navToggler};
  height: ${baseTheme.height.navToggler};
  display: none;

  div {
    width: ${baseTheme.width.navTogglerChild};
    height: ${baseTheme.height.navTogglerChild};
    background-color: ${({ theme }) => theme.burger};
    border-radius: ${baseTheme.border.radius
    .navTogglerChild};
    transform-origin: 1px;
    transition: 0.5s ease;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: ${baseTheme.size.tablet}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
