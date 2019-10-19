import React from 'react';
import { Input, Box } from '../../..';
import { select, boolean, text, number } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Input
          fullWidth={boolean('fullWidth')}
          disabled={boolean('disabled')}
          multiline={boolean('multiline')}
          disableUnderline={boolean('disableUnderline')}
          placeholder={text('placeholder', 'Input')}
          rows={number('rows')}
          rowsMax={number('rowsMax')}
          type={select('type', { text: 'text', password: 'password' }, 'text')}
        />
      </Box>
    </>
  );
};

export default Knobs;
