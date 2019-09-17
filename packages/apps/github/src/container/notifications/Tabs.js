import React from 'react';
import { Box, Typography, Tabs, Tab, useTheme } from '@iot/components';
import SwipeableViews from 'react-swipeable-views';
import List from './List';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div" hidden={value !== index} {...other}>
      {children}
    </Typography>
  );
};

const ProfileTabs = ({ history }) => {
  const theme = useTheme();
  const [selected, setSelected] = React.useState(0);
  const handleChangeIndex = React.useCallback((e, value) => {
    setSelected(value);
  }, []);

  return (
    <Box display="flex" flexDirection="column" flex="1" overflow="hidden">
      <Box bgcolor={theme.palette.primary.main} color="#fff">
        <Tabs value={selected} onChange={handleChangeIndex} indicatorColor="secondary" variant="fullWidth">
          <Tab label="UNREAD" />
          <Tab label="PARTICIPANT" />
          <Tab label="ALL" />
        </Tabs>
      </Box>
      <SwipeableViews index={selected} onChangeIndex={handleChangeIndex} style={{ flex: 1, overflow: 'auto' }}>
        <TabPanel value={selected} index={0}>
          <Box p={1} overflow="hidden" width="100%" height="100%">
            <Box overflow="auto">
              <List params={{ unread: true }} />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={selected} index={1}>
          <Box p={1} overflow="hidden" width="100%" height="100%">
            <Box overflow="auto">
              <List params={{ participant: true }}/>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={selected} index={2}>
          <Box p={1} overflow="hidden" width="100%" height="100%">
            <Box overflow="auto">
              <List params={{ all: true }}/>
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default ProfileTabs;
