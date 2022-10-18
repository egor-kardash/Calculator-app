import React from 'react';

import { Content } from './styled';

import { Calculator } from '@/components/functionComponents/Calculator';
import { Display } from '@/components/functionComponents/Display';
import { ControlPanel } from '@/containers/functionComponents/ControlPanel';
import { Keypad } from '@/containers/functionComponents/Keypad';
import { PageLayout } from '@/layouts';

export const Home = () => (
  <PageLayout>
    <Content>
      <Calculator>
        <Display />
        <Keypad />
      </Calculator>
      <ControlPanel />
    </Content>
  </PageLayout>
);
