import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '../../../';
import { Home, Favorite, Room, Work } from '../../../icon';

const Demo = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      flexDirection="column"
      bgcolor="#f5f5f5"
    >
      <Box flex="1" />
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="Favorite"
          value="Favorite"
          icon={<Favorite />}
        />
        <BottomNavigationAction
          label="Room"
          value="Room"
          icon={<Room />}
        />
        <BottomNavigationAction
          label="Work"
          value="Work"
          icon={<Work />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Demo;
