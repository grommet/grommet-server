import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardBody, CardFooter, Chart, Text } from 'grommet';
import { Identifier } from '../Identifier';

const gradient = [
  { value: 28, color: 'status-ok' },
  { value: 50, color: 'status-warning' },
  { value: 80, color: 'status-critical' },
];

const ChartPreview = ({ type }) => (
  <Chart
    type={type}
    id={type}
    dash={type === 'line'}
    round
    thickness="xsmall"
    bounds={[
      [0, 6],
      [0, 100],
    ]}
    values={[
      { value: [6, 100], label: 'one hundred' },
      { value: [5, 70], label: 'seventy' },
      { value: [4, 40], label: 'sixty' },
      { value: [3, 80], label: 'eighty' },
      { value: [2, 25], label: 'forty' },
      { value: [1, 50], label: 'thirty' },
      { value: [0, 25], label: 'sixty' },
    ]}
    aria-label="Preview analytics card"
    color={gradient}
    size={{ height: 'xsmall' }}
  />
);

export const SensorsCard = ({ title, subTitle, icon, message, type }) => (
  <Card
    key={title}
    onClick={() => {
      // eslint-disable-next-line no-alert
      alert('Card was Clicked!');
    }}
    background="background-contrast"
  >
    <CardBody pad="medium">
      <Identifier title={title} subTitle={subTitle} size="small">
        {icon}
      </Identifier>
      <ChartPreview type={type} />
    </CardBody>
    <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Text size="xsmall">{message}</Text>
    </CardFooter>
  </Card>
);

SensorsCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.string,
};

SensorsCard.defaultProps = {
  icon: undefined,
  title: undefined,
  subTitle: undefined,
  message: undefined,
  type: undefined,
};

ChartPreview.propTypes = {
  type: PropTypes.string,
};

ChartPreview.defaultProps = {
  type: undefined,
};
