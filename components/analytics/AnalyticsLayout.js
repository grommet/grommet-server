import React from 'react';

import { Grid } from 'grommet';
import { AnalyticsSection } from './AnalyticsSection';
import { power } from '../../data/analytics/power';

export const AnalyticsLayout = () => (
  // Single column Grid
  <Grid columns="medium" rows="medium" gap="large">
    {console.log(power)}
    {power.map(item => (
      <AnalyticsSection data={item} />
    ))}
  </Grid>
);
