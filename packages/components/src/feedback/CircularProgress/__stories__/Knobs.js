import React from 'react';
import { CircularProgress, Box } from '../../..';
import { select, boolean, number } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <CircularProgress
          variant={select(
            'variant',
            {
              determinate: 'determinate',
              indeterminate: 'indeterminate',
              static: 'static',
            },
            'indeterminate',
          )}
          color={select(
            'color',
            {
              inherit: 'inherit',
              primary: 'primary',
              secondary: 'secondary',
            },
            'primary',
          )}
          size={number('size')}
          thickness={number('thickness')}
          disableShrink={boolean('disableShrink')}
        />
      </Box>
    </>
  );
};

export default Knobs;
