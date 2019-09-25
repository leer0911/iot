import React from 'react';
import { Fab, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';
import { Add } from '../../../icon';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5">
        <Fab
          variant={select(
            'variant',
            {
              round: 'round',
              extended: 'extended',
            },
            'round',
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
              large: 'large',
            },
            'medium',
          )}
          centerRipple={boolean('centerRipple')}
          disabled={boolean('disabled')}
          disableRipple={boolean('disableRipple')}
        >
          <Add />
        </Fab>
      </Box>
    </>
  );
};

export default Knobs;
