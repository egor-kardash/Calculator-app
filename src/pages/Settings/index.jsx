import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  ClearAllButton,
  Name,
  Option,
  SelectionMenu,
  SwitchName,
  Wrapper,
} from './styled';

import { PageLayout } from '@/layouts';
import { clearExpression } from '@/reducers/actionCreators/expression';
import { clearHistory } from '@/reducers/actionCreators/history';
import { clearResult } from '@/reducers/actionCreators/result';
import { toggleTheme } from '@/reducers/actionCreators/theme';

class _Settings extends React.Component {
  handleClick = () => {
    this.props.clearExpression();
    this.props.clearResult();
    this.props.clearHistory();
  };

  handleChange = (event) => {
    this.props.toggleTheme(event.target.value);
  };

  render() {
    const { theme } = this.props;

    return (
      <PageLayout>
        <Wrapper>
          <Name>Settings</Name>
          <SwitchName>Switch theme</SwitchName>
          <SelectionMenu
            onChange={this.handleChange}
            value={theme.currentTheme}
          >
            <Option value='light'>Light theme</Option>
            <Option value='dark'>Dark theme</Option>
          </SelectionMenu>
          <ClearAllButton onClick={this.handleClick}>
            Clear All History
          </ClearAllButton>
        </Wrapper>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => dispatch(clearHistory()),
  clearResult: () => dispatch(clearResult()),
  clearExpression: () => dispatch(clearExpression()),
  toggleTheme: (value) => dispatch(toggleTheme(value)),
});

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Settings);

_Settings.propTypes = {
  clearHistory: PropTypes.func,
  clearResult: PropTypes.func,
  clearExpression: PropTypes.func,
  toggleTheme: PropTypes.func,
  theme: PropTypes.object,
};
