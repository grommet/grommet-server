import React from 'react';

import { Box, Main } from 'grommet';
import { Infra, ManageLayout, SensorsLayout } from '../components';

const Index = () => {
  return (
    <Infra>
      <Main pad="large" gap="xlarge">
        <ManageLayout />
        <Box border="top" pad="small" />
        <SensorsLayout />
      </Main>
    </Infra>
  );
};

export default Index;
