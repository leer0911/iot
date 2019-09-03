import React from 'react';

import { Modal, Fade, Button, Box, Paper } from '../../../';

const Demo = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box p={1}>
      <h3>基础用法</h3>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box p={3}>
            <Paper>
              <Box p={1}>
                <h2 id="spring-modal-title">Spring modal</h2>
                <p id="spring-modal-description">react-spring animates me.</p>
              </Box>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Demo;
