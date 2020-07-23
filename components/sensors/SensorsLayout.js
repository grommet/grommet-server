import React from 'react';

import { Grid, Heading } from 'grommet';
import { sensors } from '../../data/sensors';
import { SensorsCard } from './SensorsCard';

export const SensorsLayout = () => {
  return (
    <>
      <Heading level="1" size="small">
        Sensors
      </Heading>
      <Grid columns={{ count: 'fit', size: ['small', 'medium'] }} gap="medium">
        {sensors.map(item => (
          <SensorsCard
            background={item.color}
            title={item.title}
            subTitle={item.subTitle}
            message={item.message}
            icon={item.icon}
            key={item.title}
            type={item.type}
          />
        ))}
      </Grid>
    </>
  );
};
