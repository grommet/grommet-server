import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grommet, ResponsiveContext } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { AppHeader, AppSidebar } from '.';

export const Infra = ({ children }) => {
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
          {children}
        </Box>
      </Box>
    </Grommet>
  );
};

Infra.propTypes = {
  children: PropTypes.object,
};

Infra.defaultProps = {
  children: PropTypes.node,
};
