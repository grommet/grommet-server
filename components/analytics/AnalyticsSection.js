import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grommet';
// import { ChartInfo } from './ChartInfo';
import { Info } from './Info';

export const AnalyticsSection = ({ data }) => (
  <Box direction="row">
    <Info item={data} />
    {/* <ChartInfo /> */}
  </Box>
);

AnalyticsSection.propTypes = {
  data: PropTypes.object,
};
AnalyticsSection.defaultProps = {
  data: undefined,
};
