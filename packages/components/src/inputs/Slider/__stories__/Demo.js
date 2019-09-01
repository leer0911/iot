import React from 'react';
import { Box, Slider } from '../../../';
import Knobs from './Knobs';

const Demo = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box p={2}>
      <Knobs></Knobs>
      <h3>基础用法</h3>
      <Slider
        defaultValue={30}
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="on"
      />

      <Slider
        value={value}
        onChange={handleChange}
        step={1}
        min={0}
        max={100}
      />

      <h3>禁用状态</h3>
      <Slider defaultValue={30} step={1} min={0} max={100} disabled />

      <h3>垂直方向</h3>
      <Box height="100px">
        <Slider step={1} min={0} max={100} orientation="vertical" />
      </Box>
    </Box>
  );
};

export default Demo;
