import React from 'react';
import { Badge, Box, Button } from '../../..';
import { select, boolean, number } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <Badge
          variant={select('variant', { standard: 'standard', dot: 'dot' })}
          color={select(
            'color',
            {
              default: 'default',
              primary: 'primary',
              secondary: 'secondary',
            },
            'default',
          )}
          showZero={boolean('showZero')}
          invisible={boolean('invisible')}
          badgeContent={number('badgeContent', 1)}
          max={number('max', 1)}
        >
          <Button variant="contained">primary</Button>
        </Badge>
      </Box>
    </>
  );
};

export default Knobs;
