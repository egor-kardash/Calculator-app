import React from 'react';

import { Content } from '../Home/styled';

import { Calculator } from '@/components/classComponents/Calculator';
import { Display } from '@/components/classComponents/Display';
import { ControlPanel } from '@/containers/classComponents/ControlPanel';
import { Keypad } from '@/containers/classComponents/Keypad';
import { PageLayout } from '@/layouts';

export class ClassHome extends React.Component {
  render() {
    return (
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
  }
}
