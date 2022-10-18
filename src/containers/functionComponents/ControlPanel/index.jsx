import React from 'react';

import { useDispatch } from 'react-redux';

import {
  ControlPanelContainer,
  HistoryToggleIcon,
  StyledName,
  TrashIcon,
} from './styled';

import { History } from '@/components/functionComponents/History';
import { useToggle } from '@/hooks/useToggle';
import { clearHistory } from '@/reducers/actionCreators/history';

export const ControlPanel = () => {
  const [isHidden, setHidden] = useToggle();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearHistory());
  };

  return (
    <>
      <ControlPanelContainer isHidden={isHidden}>
        <StyledName>History</StyledName>
        <History />
        <TrashIcon onClick={handleClick} />
      </ControlPanelContainer>
      <HistoryToggleIcon
        isHidden={isHidden}
        onClick={setHidden}
      />
    </>
  );
};
