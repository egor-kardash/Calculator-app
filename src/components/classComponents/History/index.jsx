import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  ListContainer,
  ListItem,
} from '@/components/functionComponents/History/styled';

class _History extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <ListContainer>
        {history.currentValue.map((value, id) => (
          <ListItem key={id}>{value}</ListItem>
        ))}
      </ListContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history,
});

export const History = connect(
  mapStateToProps,
  null,
)(_History);

_History.propTypes = {
  history: PropTypes.object,
};
