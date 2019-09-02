import React from 'react';
import * as Icon from '../';
import { Box, Typography } from '../../../';
import Knobs from './Knobs';

const Demo = () => {
  let Component = null;
  const keys = Object.keys(Icon);
  return (
    <Box p={1}>
      <Knobs></Knobs>
      <h3>基本图标</h3>
      <Box display="flex" flexWrap="wrap">
        {keys.map(key => {
          Component = Icon[key];
          return (
            <Box
              width="33.3%"
              height="70px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Component></Component>
              <Typography variant="caption">{key}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Demo;
