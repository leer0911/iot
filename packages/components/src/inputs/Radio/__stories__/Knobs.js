import React from 'react';
import { Radio, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <Radio
          color={select(
            'color',
            {
              default: 'default',
              primary: 'primary',
              secondary: 'secondary',
            },
            'secondary',
          )}
          checked={boolean('checked', true)}
          disabled={boolean('disabled')}
          disableRipple={boolean('disableRipple')}
        ></Radio>
      </Box>
    </>
  );
};

export default Knobs;