import React from 'react';
import { Button, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const color = select(
  'color',
  {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
  },
  'default',
);

const variant = select('variant', {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained',
});

const size = select(
  'size',
  {
    small: 'small',
    medium: 'medium',
    large: 'large',
  },
  'medium',
);
const fullWidth = boolean('fullWidth');
const centerRipple = boolean('centerRipple');
const disabled = boolean('disabled');
const disableRipple = boolean('disableRipple');

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <Button
          variant={variant}
          color={color}
          size={size}
          fullWidth={fullWidth}
          centerRipple={centerRipple}
          disabled={disabled}
          disableRipple={disableRipple}
        >
          测试按钮
        </Button>
      </Box>
    </>
  );
};

export default Knobs;
