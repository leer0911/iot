import React from 'react';
import { Slider, Box } from '../../..';
import { boolean, number, select } from '@storybook/addon-knobs';

const Knobs = () => {
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Slider
          disabled={boolean('disabled')}
          step={number('step', 1)}
          min={number('min', 1)}
          max={number('max', 1)}
          valueLabelDisplay={select(
            'valueLabelDisplay',
            {
              on: 'on',
              auto: 'auto',
              off: 'off',
            },
            'off',
          )}
        >
          测试按钮
        </Slider>
      </Box>
    </>
  );
};

export default Knobs;
