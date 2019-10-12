import React from 'react';
import { Box, Button, Popover, Typography } from '../../../';
import Knobs from './Knobs';
import { object } from '@storybook/addon-knobs';

const Demo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box p={2}>
      <Knobs />

      <h3>基础用法</h3>
      <Box p={2} bgcolor="#f5f5f5">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={object('anchorOrigin', {
            vertical: 'top',
            horizontal: 'left',
          })}
          transformOrigin={object('transformOrigin', {
            vertical: 'top',
            horizontal: 'left',
          })}
        >
          <Box p={2}>
            <Typography>The content of the Popover.</Typography>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Demo;
