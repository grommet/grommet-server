import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardBody, CardFooter, Text } from 'grommet';
import { Identifier } from '../Identifier';

export const ManageCard = ({ icon, message, title, subTitle, ...rest }) => (
  <Card key={message} {...rest}>
    <CardBody pad="small">
      <Identifier
        pad="small"
        title={title}
        subTitle={subTitle}
        size="small"
        align="start"
        gap="medium"
      >
        {icon}
      </Identifier>
    </CardBody>
    <CardFooter pad={{ horizontal: 'medium', vertical: 'medium' }}>
      <Text size="xsmall">{message}</Text>
    </CardFooter>
  </Card>
);

ManageCard.propTypes = {
  icon: PropTypes.node,
  message: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

ManageCard.defaultProps = {
  icon: undefined,
  message: undefined,
  subTitle: undefined,
  title: undefined,
};
