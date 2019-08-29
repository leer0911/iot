import React from 'react';
import { Switch, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box p={1}>
      <Knobs></Knobs>
      <h3>color</h3>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        color="default"
        value="checkedA"
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        color="secondary"
        value="checkedB"
      />
      <Switch
        checked={state.checkedC}
        onChange={handleChange('checkedC')}
        color="primary"
        value="checkedC"
      />
    </Box>
  );
};

export default Demo;
