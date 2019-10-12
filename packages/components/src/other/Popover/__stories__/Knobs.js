import React from 'react';
import { Button, Box, Popover, Typography } from '../../..';
import { object, select, number } from '@storybook/addon-knobs';

const Knobs = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorPosition={object('anchorPosition', {
            vertical: 0,
            horizontal: 0,
          })}
          anchorReference={select('anchorReference', {
            anchorEl: 'anchorEl',
            anchorPosition: 'anchorPosition',
            none: 'none',
          })}
          anchorOrigin={object('anchorOrigin', {
            vertical: 'bottom',
            horizontal: 'center',
          })}
          transformOrigin={object('transformOrigin', {
            vertical: 'top',
            horizontal: 'center',
          })}
          elevation={number('elevation', 8)}
          marginThreshold={number('marginThreshold', 16)}
        >
          <Box p={2}>
            <Typography>The content of the Popover.</Typography>
          </Box>
        </Popover>
      </Box>
    </>
  );
};

export default Knobs;
