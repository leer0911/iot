import React from 'react';
import { Checkbox, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Checkbox
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
          indeterminate={boolean('indeterminate')}
          disabled={boolean('disabled')}
          disableRipple={boolean('disableRipple')}
        />
      </Box>
    </>
  );
};

export default Knobs;
