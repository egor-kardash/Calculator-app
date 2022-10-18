import React, { Suspense } from 'react';

import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from '@/components/functionComponents/Header';
import { Loader } from '@/components/functionComponents/Loader';
import {
  CLASS_HOME_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants';
import { WrappedRoute } from '@/containers/WrappedRoute';
import { GlobalStyles } from '@/globalStyles';
import { ClassHome } from '@/pages/ClassHome';
import { Home } from '@/pages/Home';
import { Settings } from '@/pages/Settings';
import { baseTheme } from '@/theme';

export const App = () => {
  const theme = useSelector(
    (state) => state.theme.currentTheme,
  );
  const changedTheme = theme === 'light'
    ? baseTheme.lightTheme
    : baseTheme.darkTheme;
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={changedTheme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <WrappedRoute
            exact
            path={HOME_PAGE_ROUTE}
            component={Home}
          />
          <WrappedRoute
            exact
            path={CLASS_HOME_PAGE_ROUTE}
            component={ClassHome}
          />
          <WrappedRoute
            exact
            path={SETTINGS_PAGE_ROUTE}
            component={Settings}
          />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
};
