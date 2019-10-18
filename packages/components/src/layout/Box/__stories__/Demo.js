import React from 'react';
import { Box } from '../../../';

const Demo = props => {
  return (
    <Box p={2}>
      <h3>基本用法</h3>
      <Box
        display="flex"
        border={1}
        borderColor="#eee"
        height={100}
        bgcolor="#eee"
        borderRadius="5px"
        p={2}
      >
        <img
          src="https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png"
          alt="material ui"
          height="100%"
        />

        <Box ml={2}>well meaning and kindly.</Box>
      </Box>
    </Box>
  );
};

export default Demo;
