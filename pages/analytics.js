import React from 'react';

import { Main } from 'grommet';
import { Infra, AnalyticsLayout } from '../components';

const Index = () => {
  return (
    <Infra>
      <Main pad="large" gap="xlarge">
        <AnalyticsLayout />
      </Main>
    </Infra>
  );
};

export default Index;
