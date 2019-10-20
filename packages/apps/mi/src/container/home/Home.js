import React from 'react';
import { Box, Typography, Tabs, Tab, Fab } from '@iot/components';
import { ArrowDropDown, AddCircle, Search } from '@iot/components/src/icon';
import { BottomNav } from '../common';
import Device from './Device';
import Room from './Room';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div" hidden={value !== index} {...other}>
      {children}
    </Typography>
  );
};

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      position="absolute"
      overflow="hidden"
      top="0px"
      left="0px"
      right="0px"
      bottom="0px"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" alignItems="center">
          <Typography>E 的家</Typography>
          <ArrowDropDown />
        </Box>
        <AddCircle />
      </Box>

      <Box flex="1">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="设备" disableRipple />
          <Tab label="房间" disableRipple />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Device />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Room />
        </TabPanel>
      </Box>
      <Box position="absolute" bottom={100} right={24}>
        <Fab color="primary" size="medium">
          <Search />
        </Fab>
      </Box>

      <BottomNav />
    </Box>
  );
};

export default Home;
