import React from 'react';
import { Chip, Box, Avatar } from '../../../';
import Knobs from './Knobs.js';
import Search from '../../../icon/Search';

const Demo = () => {
  const handleClick = () => {};
  const handleDelete = () => {};

  return (
    <Box p={2}>
      <Knobs />

      <h3>填充型</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Chip label="Basic Chip" />
        <Box p={1} />
        <Chip
          avatar={
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          }
          onClick={handleClick}
          label="Clickable Chip"
        />
        <Box p={1} />
        <Chip
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Box p={1} />
        <Chip
          color="primary"
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Box p={1} />
        <Chip
          color="secondary"
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Box>

      <h3>描边型</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Chip variant="outlined" label="Basic Chip" />
        <Box p={1} />
        <Chip
          variant="outlined"
          avatar={
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          }
          onClick={handleClick}
          label="Clickable Chip"
        />
        <Box p={1} />
        <Chip
          variant="outlined"
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Box p={1} />
        <Chip
          variant="outlined"
          color="primary"
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Box p={1} />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<Search />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default Demo;
