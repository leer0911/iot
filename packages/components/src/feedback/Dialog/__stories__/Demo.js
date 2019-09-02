import React from 'react';

import {
  Dialog,
  Button,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '../../../';

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
        open
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Demo;
