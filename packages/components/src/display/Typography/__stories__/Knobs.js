import React from 'react';
import { Box, Typography } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Typography
          variant={select(
            'variant',
            {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',
              subtitle1: 'subtitle1',
              subtitle2: 'subtitle2',
              body1: 'body1',
              body2: 'body2',
              caption: 'caption',
              button: 'button',
              overline: 'overline',
            },
            '',
          )}
          color={select(
            'color',
            {
              initial: 'initial',
              primary: 'primary',
              secondary: 'secondary',
              textSecondary: 'textSecondary',
              textPrimary: 'textPrimary',
              error: 'error',
            },
            'initial',
          )}
          display={select(
            'display',
            {
              block: 'block',
              initial: 'initial',
              inline: 'inline',
            },
            'initial',
          )}
          align={select(
            'align',
            {
              initial: 'initial',
              left: 'left',
              center: 'center',
              right: 'right',
              justify: 'justify',
            },
            'initial',
          )}
          gutterBottom={boolean('gutterBottom')}
          noWrap={boolean('noWrap')}
          paragraph={boolean('paragraph')}
        >
          Typography
        </Typography>
      </Box>
    </>
  );
};

export default Knobs;
