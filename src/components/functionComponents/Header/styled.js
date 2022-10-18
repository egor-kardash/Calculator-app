import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const HeaderContainer = styled.div`
  width: ${baseTheme.width.header};
  height: ${baseTheme.height.header};
  padding: ${baseTheme.padding.header};
  align-items: center;
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
  border-bottom: ${baseTheme.border.width.basic} solid
    ${baseTheme.colors.lightGrey};
  font-size: calc(18px + 16 * (100vw / 1920));
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  user-select: none;
  margin: ${baseTheme.margin.logo};
`;

export const CalculatorIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/calculator.svg');
  height: ${baseTheme.height.calculatorIcon};
  width: ${baseTheme.width.calculatorIcon};
  margin: ${baseTheme.margin.calculatorIcon};
  background-color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;
