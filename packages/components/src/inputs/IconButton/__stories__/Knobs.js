import React from 'react';
import { IconButton, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';
import { Add } from '../../../icon';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <IconButton
          edge={select(
            'edge',
            {
              start: 'start',
              end: 'end',
              false: false,
            },
            false,
          )}
          color={select(
            'color',
            {
              inherit: 'inherit',
              default: 'default',
              primary: 'primary',
              secondary: 'secondary',
            },
            'default',
          )}
          size={select(
            'size',
            {
              small: 'small',
              medium: 'medium',
            },
            'medium',
          )}
          centerRipple={boolean('centerRipple')}
          disabled={boolean('disabled')}
          disableRipple={boolean('disableRipple')}
        >
          <Add />
        </IconButton>
      </Box>
    </>
  );
};

export default Knobs;
