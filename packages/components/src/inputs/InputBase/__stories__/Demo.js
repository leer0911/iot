import React from 'react';
import { InputBase, Box } from '../../../';

const Demo = () => {
  return (
    <Box p={1}>
      <h3>基本用法</h3>
      <InputBase placeholder="InputBase"></InputBase>
      <InputBase placeholder="native textarea" multiline rows={3}></InputBase>
      <InputBase placeholder="Textarea" multiline></InputBase>

      <h3>禁用状态</h3>
      <InputBase placeholder="InputBase" disabled></InputBase>
    </Box>
  );
};

export default Demo;
