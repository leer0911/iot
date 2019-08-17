import React from 'react';
import { Radio, Box } from '../../../';

const Demo = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box p={1}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
      />
    </Box>
  );
};

export default Demo;
