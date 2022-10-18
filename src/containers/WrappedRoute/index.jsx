import React from 'react';

import { Route } from 'react-router-dom';

import { ErrorBoundary } from '../ErrorBoundary';

export const WrappedRoute = (props) => (
    <ErrorBoundary key={props.location?.pathname}>
      <Route {...props} />
    </ErrorBoundary>
);
