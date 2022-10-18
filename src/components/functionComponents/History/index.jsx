import React from 'react';

import { useSelector } from 'react-redux';

import { ListContainer, ListItem } from './styled';

export const History = () => {
  const history = useSelector(
    (state) => state.history.currentValue,
  );

  return (
    <ListContainer>
      {history.map((value, id) => (
        <ListItem key={id}>{value}</ListItem>
      ))}
    </ListContainer>
  );
};
