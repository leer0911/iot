import React from 'react';
import { Tabs, Tab, Box } from '../../..';
import { select, boolean } from '@storybook/addon-knobs';

const Knobs = () => {
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#eee" borderRadius={5}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={select(
            'variant',
            {
              standard: 'standard',
              scrollable: 'scrollable',
              fullWidth: 'fullWidth',
            },
            'standard',
          )}
          indicatorColor={select(
            'indicatorColor',
            {
              primary: 'primary',
              secondary: 'secondary',
            },
            'secondary',
          )}
          textColor={select(
            'textColor',
            {
              inherit: 'inherit',
              primary: 'primary',
              secondary: 'secondary',
            },
            'inherit',
          )}
          scrollButtons={select('scrollButtons', {
            auto: 'auto',
            destop: 'destop',
            on: 'on',
            off: 'off',
          })}
          centered={boolean('centered')}
        >
          <Tab label="Bed Room" />
          <Tab label="Living Room" />
          <Tab label="Room 1" />
          <Tab label="Room 2" />
          <Tab label="Room 3" />
          <Tab label="Room 4" />
          <Tab label="Room 5" />
        </Tabs>
      </Box>
    </>
  );
};

export default Knobs;
