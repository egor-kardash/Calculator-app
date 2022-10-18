import React from 'react';

import { LoaderContainer } from './styled';

import { baseTheme } from '@/theme';

const LOADER_SIZE = 100;

export const Loader = () => (
  <LoaderContainer
    type='Bars'
    color={baseTheme.colors.secondary}
    height={LOADER_SIZE}
    width={LOADER_SIZE}
  />
);
