import React from 'react';
import { Chip, Box, Avatar } from '../../../';
import Knobs from './Knobs.js';
import Search from '../../../icon/Search';

const Demo = () => {
  const handleClick = () => {};
  const handleDelete = () => {};

  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>基础用法</h3>
      <Chip label="Basic Chip" />
      <Box p={1}></Box>
      <Chip
        avatar={
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"></Avatar>
        }
        onClick={handleClick}
        label="Clickable Chip"
      />
      <Box p={1}></Box>
      <Chip
        icon={<Search />}
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <h3>color</h3>
      <Chip
        color="primary"
        icon={<Search />}
        label="primary"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        color="secondary"
        icon={<Search />}
        label="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <h3>variant</h3>
      <Chip
        color="primary"
        variant="outlined"
        icon={<Search />}
        label="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        color="secondary"
        variant="outlined"
        icon={<Search />}
        label="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default Demo;
