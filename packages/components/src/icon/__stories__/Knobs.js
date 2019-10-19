import React from 'react';
import { Box } from '../../..';
import { select, text } from '@storybook/addon-knobs';
import Favorite from '../Favorite';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Favorite
          color={select(
            'color',
            {
              inherit: 'inherit',
              primary: 'primary',
              secondary: 'secondary',
              error: 'error',
              disabled: 'disabled',
              action: 'action',
            },
            'inherit',
          )}
          fontSize={select(
            'fontSize',
            {
              inherit: 'inherit',
              default: 'default',
              medium: 'medium',
              large: 'large',
            },
            'default',
          )}
          titleAccess={text('titleAccess')}
          htmlColor={text('htmlColor')}
          viewBox={text('viewBox')}
        />
      </Box>
    </>
  );
};

export default Knobs;
