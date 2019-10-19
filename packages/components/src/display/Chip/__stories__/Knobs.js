import React from 'react';
import { Chip, Box, Avatar } from '../../..';
import { select, boolean, text } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Chip
          label={text('label', 'test')}
          avatar={
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          }
          variant={select(
            'variant',
            {
              default: 'default',
              outlined: 'outlined',
            },
            'default',
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
          clickable={boolean('clickable', false)}
        />
      </Box>
    </>
  );
};

export default Knobs;
