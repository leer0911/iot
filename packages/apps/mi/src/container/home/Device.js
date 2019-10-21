import React from 'react';
import { Grid, Paper, Box, Typography } from '@iot/components';
import { ExpandMore } from '@iot/components/src/icon';

const Device = () => {
  return (
    <Box p={2}>
      <Paper>
        <Box position="relative">
          <Box display="flex" justifyContent="space-between" p={1} mb={2}>
            <Typography>我的设备 (3)</Typography>
            <ExpandMore />
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <Box p={1}>
              <Box
                bgcolor="#f5f5f5"
                borderRadius={5}
                width={60}
                height={60}
                mb={1}
              />
              <Typography variant="subtitle2" noWrap>
                手机红外遥控器
              </Typography>
              <Typography variant="caption">手机 | 设备数 0</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Device;
