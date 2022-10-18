import React from 'react';

import { StyledDiv } from './styled';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <StyledDiv>
          Error!
        </StyledDiv>
      );
    }
    return this.props.children;
  }
}
