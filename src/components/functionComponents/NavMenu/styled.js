import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const NavItemsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: ${baseTheme.size.tablet}) {
    top: ${baseTheme.position.top.navMenu};
    right: ${baseTheme.position.right.navMenu};
    width: ${baseTheme.width.navMenu};
    height: ${baseTheme.height.navMenu};
    flex-flow: column nowrap;
    position: fixed;
    align-items: center;
    z-index: 1;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.5s ease;

    &.nav-menu {
      background: ${({ theme }) => theme.navMenu};
    }
  }
`;

export const NavItem = styled.li`
  padding: ${baseTheme.padding.navItem};
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  margin: ${baseTheme.margin.navLink};
  color: ${({ theme }) => theme.text};
  border: none;
  opacity: 0.7;

  &.active {
    border-bottom: ${baseTheme.border.width.large} solid
      ${({ theme }) => theme.text};
    opacity: 1;
  }
`;
