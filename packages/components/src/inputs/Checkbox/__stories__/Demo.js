import React from 'react';
import { Checkbox, Box } from '../../../';

const Demo = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box p={1}>
      <Checkbox
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
      />
      <Checkbox
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
      />
    </Box>
  );
};

export default Demo;
