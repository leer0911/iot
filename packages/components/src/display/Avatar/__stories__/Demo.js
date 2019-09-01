import React from 'react';
import { Avatar, Box } from '../../../';
import Search from '../../../icon/Search';

const Demo = () => {
  return (
    <Box p={1}>
      <h3>基本用法</h3>
      <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"></Avatar>
      <Box p={1}></Box>
      <Avatar>H</Avatar>
      <Box p={1}></Box>
      <Avatar>
        <Search></Search>
      </Avatar>
    </Box>
  );
};

export default Demo;
