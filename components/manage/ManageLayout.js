import React from 'react';

import { Grid, Heading } from 'grommet';
import { controls } from '../../data/controls';
import { ManageCard } from './ManageCard';

export const ManageLayout = () => {
  return (
    <>
      <Heading level="1" size="small">
        Manage
      </Heading>
      <Grid columns={{ count: 'fit', size: ['small', 'medium'] }} gap="medium">
        {controls.map((item) => (
          <ManageCard
            background={item.color}
            title={item.title}
            subTitle={item.subTitle}
            message={item.message}
            icon={item.icon}
            key={item.title}
          />
        ))}
      </Grid>
    </>
  );
};
