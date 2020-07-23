import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'grommet';

export const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box {...rest} overflow="hidden">
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

Identifier.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  size: PropTypes.string,
};

Identifier.defaultProps = {
  children: PropTypes.node,
  title: undefined,
  subTitle: undefined,
  size: undefined,
};
