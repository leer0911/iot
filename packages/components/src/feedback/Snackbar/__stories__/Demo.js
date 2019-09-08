import React from 'react';
import { Box, Snackbar, Button, IconButton } from '../../../';
import { Close } from '../../../icon';

const Demo = () => {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  return (
    <Box p={1}>
      <h3>基础使用</h3>
      <Button onClick={handleClick} variant="contained" color="primary">
        Open simple snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={<span id="message-id">Note archived</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close />
          </IconButton>,
        ]}
      />
    </Box>
  );
};

export default Demo;
