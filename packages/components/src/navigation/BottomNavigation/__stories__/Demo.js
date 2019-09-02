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
      bgcolor="#eee"
    >
      <Box flex="1"></Box>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<Home></Home>}
        />
        <BottomNavigationAction
          label="Favorite"
          value="Favorite"
          icon={<Favorite></Favorite>}
        />
        <BottomNavigationAction
          label="Room"
          value="Room"
          icon={<Room></Room>}
        />
        <BottomNavigationAction
          label="Work"
          value="Work"
          icon={<Work></Work>}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Demo;
