import React from 'react';

import { Box, Grommet, ResponsiveContext } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { AppHeader, AppMain, AppSidebar } from '../components';

export default function Home() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Grommet full theme={hpe} themeMode="dark">
      <Box
        direction={size === 'small' ? 'column-reverse' : 'row'}
        background="background-back"
        height={size === 'small' ? { max: 'large' } : '100%'}
        width={size === 'small' ? 'medium' : '100%'}
      >
        <AppSidebar />
        <Box flex overflow="auto" a>
          <AppHeader />
          <AppMain />
        </Box>
      </Box>
    </Grommet>
  );
}
