import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { History } from '@/components/classComponents/History';
import {
  ControlPanelContainer,
  HistoryToggleIcon,
  StyledName,
  TrashIcon,
} from '@/containers/functionComponents/ControlPanel/styled';
import { useToggle } from '@/hooks/useToggle';
import { clearHistory } from '@/reducers/actionCreators/history';

class _ControlPanel extends React.Component {
  render() {
    const {
      isHidden,
      setHidden,
      clearHistory,
    } = this.props;

    return (
      <>
        <ControlPanelContainer isHidden={isHidden}>
          <StyledName>History</StyledName>
          <History />
          <TrashIcon onClick={clearHistory} />
        </ControlPanelContainer>
        <HistoryToggleIcon
          isHidden={isHidden}
          onClick={setHidden}
        />
      </>
    );
  }
}

export const ControlPanel = () => {
  const [isHidden, setHidden] = useToggle();
  const dispatch = useDispatch();

  const helperClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <_ControlPanel
      isHidden={isHidden}
      setHidden={setHidden}
      clearHistory={helperClearHistory}
    />
  );
};

_ControlPanel.propTypes = {
  isHidden: PropTypes.bool,
  setHidden: PropTypes.func,
  clearHistory: PropTypes.func,
};
