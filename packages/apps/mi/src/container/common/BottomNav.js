import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@iot/components';
import { Home, LocalMall, Favorite, Settings } from '@iot/components/src/icon';

const BottomNav = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction label="Home" value="Home" icon={<Home />} />
      <BottomNavigationAction label="Mall" value="Mall" icon={<LocalMall />} />
      <BottomNavigationAction label="Smart" value="Smart" icon={<Favorite />} />
      <BottomNavigationAction
        label="Settings"
        value="Settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
