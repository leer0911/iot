import React from 'react';
import { Slider } from '../../../';

const Demo = () => {
  return (
    <Slider
      defaultValue={30}
      valueLabelDisplay="auto"
      step={10}
      min={10}
      max={110}
    />
  );
};

export default Demo;
