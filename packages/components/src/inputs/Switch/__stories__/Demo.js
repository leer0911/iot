import React from 'react';
import { Switch, Box } from '../../../';

const Demo = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box p={1}>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        color="secondary"
        value="checkedA"
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
      />
    </Box>
  );
};

export default Demo;
