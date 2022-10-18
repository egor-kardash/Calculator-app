import React from 'react';

import { TogglerIcon } from './styled';

import { NavMenu } from '@/components/functionComponents/NavMenu';
import { useToggle } from '@/hooks/useToggle';

export const Toggler = () => {
  const [isOpen, setOpen] = useToggle();

  return (
    <>
      <TogglerIcon isOpen={isOpen} onClick={setOpen}>
        <div></div>
        <div></div>
        <div></div>
      </TogglerIcon>
      <NavMenu isOpen={isOpen} />
    </>
  );
};
