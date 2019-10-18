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
      <Knobs />
      <h3>基础用法</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Slider
          defaultValue={30}
          step={1}
          min={0}
          max={100}
          valueLabelDisplay="on"
        />

        <Box p={1} />

        <Slider
          value={value}
          onChange={handleChange}
          step={1}
          min={0}
          max={100}
        />

        <Box p={1} />
        <Slider defaultValue={30} step={1} min={0} max={100} disabled />
      </Box>

      <h3>垂直方向</h3>
      <Box bgcolor="#f5f5f5" height="100px" p={2}>
        <Slider step={1} min={0} max={100} orientation="vertical" />
      </Box>
    </Box>
  );
};

export default Demo;
