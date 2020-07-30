import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Footer, List, Text } from 'grommet';

export const Info = ({ item }) => (
  <Box
    background="background-contrast"
    pad="medium"
    round={{ size: 'small', corner: 'left' }}
  >
    {item && !item.content && (
      <Box gap="medium">
        {item.icon}
        <Text size="xxlarge"> {item.title} </Text>
        <Text> {item.subTitle} </Text>
        <Box flex />
        <Footer gap="xlarge" pad="small">
          <Box direction="row" gap="small" align="center">
            <Box round background="green" pad="xsmall" responsive={false} />
            {item.status}
          </Box>
          <Button primary label={item.action} />
        </Footer>
      </Box>
    )}
    {item && item.content && (
      <Box>
        <Text size="xlarge" margin={{ vertical: 'small' }}>
          {item.title}
        </Text>
        <Box border="top" pad="xsmall" />
        <List
          data={item.content}
          pad={{ vertical: 'xsmall' }}
          primaryKey="key"
          secondaryKey="value"
        />
      </Box>
    )}
  </Box>
);

Info.propTypes = {
  item: PropTypes.object,
};
Info.defaultProps = {
  item: undefined,
};
