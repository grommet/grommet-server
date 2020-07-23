import React from 'react';

import { Grid, Heading, Main } from 'grommet';
import { serversData } from '../data/servers';
import { Card } from './card/Card';

export const AppMain = () => {
  return (
    <Main pad="large">
      <Heading level="1" size="small">
        Servers
      </Heading>
      <Grid columns={{ count: 'fit', size: ['small', 'medium'] }} gap="medium">
        {serversData.map((item) => (
          <Card
            background={item.group}
            title={item.name}
            subTitle={item.description}
            address={item.address}
            connection={item.connection}
            key={item.name}
          >
            {item.icon}
          </Card>
        ))}
      </Grid>
    </Main>
  );
};
