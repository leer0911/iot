import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '../../../';
import { Add } from '../../../icon';

const Demo = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={1} bgcolor="#eee">
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="Home" icon={<Add></Add>} />
        <BottomNavigationAction label="Room" value="Room" icon={<Add></Add>} />
      </BottomNavigation>
    </Box>
  );
};

export default Demo;
