import React from 'react';

import PropTypes from 'prop-types';

import {
  NavItem,
  NavItemsContainer,
  StyledNavLink,
} from './styled';

import {
  CLASS_HOME_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants/index';

export const NavMenu = ({ isOpen }) => (
  <NavItemsContainer isOpen={isOpen} className='nav-menu'>
    <NavItem>
      <StyledNavLink
        exact
        activeClassName='active'
        to={HOME_PAGE_ROUTE}
      >
        Home
      </StyledNavLink>
    </NavItem>
    <NavItem>
      <StyledNavLink
        activeClassName='active'
        to={CLASS_HOME_PAGE_ROUTE}
      >
        Class Home
      </StyledNavLink>
    </NavItem>
    <NavItem>
      <StyledNavLink
        activeClassName='active'
        to={SETTINGS_PAGE_ROUTE}
      >
        Settings
      </StyledNavLink>
    </NavItem>
  </NavItemsContainer>
);

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
};
