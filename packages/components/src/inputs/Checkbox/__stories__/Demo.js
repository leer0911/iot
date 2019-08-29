import React from 'react';
import { Checkbox, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event, checked) => {
    setSelectedValue(checked);
  };

  return (
    <Box p={1}>
      <Knobs></Knobs>
      
      <h3>color</h3>
      <Checkbox
        color="default"
        checked={selectedValue === 'a'}
        onChange={handleChange}
      />
      <Checkbox
        color="primary"
        checked={selectedValue === 'a'}
        onChange={handleChange}
      />
      <Checkbox checked={selectedValue === 'a'} onChange={handleChange} />
    </Box>
  );
};

export default Demo;
