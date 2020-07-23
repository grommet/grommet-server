import React from 'react';
import PropTypes from 'prop-types';

import { Box, Footer } from 'grommet';
import { Identifier } from '../Identifier';

const Circle = ({ color }) => (
  <Box pad="xsmall" background={color || 'green'} round responsive={false} />
);

const getConnectionColor = connection => {
  switch (connection) {
    case 'online':
      return 'green';
    case 'off':
      return 'grey';
    case 'alert':
      return 'red';
    default:
      return 'grey';
  }
};

export const Card = ({ background, connection, address, ...rest }) => {
  return (
    <Box background={background} round overflow="hidden">
      <Identifier gap="medium" pad="medium" {...rest} />
      <Footer
        background="background-contrast"
        pad={{ horizontal: 'medium', vertical: 'small' }}
      >
        {address}
        <Circle color={getConnectionColor(connection)} />
      </Footer>
    </Box>
  );
};

Card.propTypes = {
  connection: PropTypes.string,
  background: PropTypes.string,
  address: PropTypes.string,
};

Card.defaultProps = {
  connection: undefined,
  background: undefined,
  address: undefined,
};

Circle.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Circle.defaultProps = {
  color: PropTypes.node,
};
