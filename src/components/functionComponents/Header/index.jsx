import React from 'react';

import {
  CalculatorIcon,
  HeaderContainer,
  Logo,
} from './styled';

import { Toggler } from '@/containers/functionComponents/Toggler';

export const Header = () => (
  <HeaderContainer>
    <Logo>
      <CalculatorIcon />
      Calculator App
    </Logo>
    <Toggler />
  </HeaderContainer>
);
