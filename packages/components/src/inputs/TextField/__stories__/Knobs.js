import React from 'react';
import { TextField, Box } from '../../..';
import { select, boolean, text, number } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <TextField
          variant={select(
            'variant',
            {
              standard: 'standard',
              outlined: 'outlined',
              filled: 'filled',
            },
            'standard',
          )}
          type={select('type', { text: 'text', password: 'password' }, 'text')}
          margin={select('margin', {
            normal: 'normal',
            none: 'none',
            dense: 'dense',
          })}
          label={text('text', 'Label text')}
          defaultValue={text('defaultValue', 'Default Value')}
          helperText={text('helperText', 'Helper text')}
          placeholder={text('placeholder', 'Input')}
          rows={number('rows')}
          rowsMax={number('rowsMax')}
          disabled={boolean('disabled', false)}
          error={boolean('error', false)}
          fullWidth={boolean('fullWidth', false)}
          multiline={boolean('multiline')}
          required={boolean('required')}
          hiddenLabel={boolean('hiddenLabel')}
        />
      </Box>
    </>
  );
};

export default Knobs;
