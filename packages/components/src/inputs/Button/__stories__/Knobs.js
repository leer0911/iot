import React from 'react';
import { Button, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5">
        <Button
          variant={select(
            'variant',
            {
              text: 'text',
              outlined: 'outlined',
              contained: 'contained',
            },
            'text',
          )}
          color={select(
            'color',
            {
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
          fullWidth={boolean('fullWidth')}
          centerRipple={boolean('centerRipple')}
          disabled={boolean('disabled')}
          disableRipple={boolean('disableRipple')}
        >
          测试按钮
        </Button>
      </Box>
    </>
  );
};

export default Knobs;
