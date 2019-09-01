import React from 'react';
import { Divider, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5} position="relative">
        <Divider
          variant={select(
            'variant',
            {
              fullWidth: 'fullWidth',
              inSet: 'inSet',
              middle: 'middle',
            },
            'fullWidth',
          )}
          orientation={select(
            'orientation',
            {
              horizontal: 'horizontal',
              vertical: 'vertical',
            },
            'horizontal',
          )}
          light={boolean('light')}
          absolute={boolean('absolute')}
        ></Divider>
      </Box>
    </>
  );
};

export default Knobs;
