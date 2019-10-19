import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Box } from '../../../';

const Demo = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box p={2}>
      <h3>水平步骤条</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Stepper>
          <Step>
            <StepLabel>one</StepLabel>
          </Step>
          <Step>
            <StepLabel>two</StepLabel>
          </Step>
          <Step>
            <StepLabel>three</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <Box bgcolor="#f5f5f5" p={2}>
        <Stepper alternativeLabel>
          <Step>
            <StepLabel>one</StepLabel>
          </Step>
          <Step>
            <StepLabel>two</StepLabel>
          </Step>
          <Step>
            <StepLabel>three</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <h3>垂直步骤条</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Stepper orientation="vertical">
          <Step>
            <StepLabel>one</StepLabel>
          </Step>
          <Step>
            <StepLabel>two</StepLabel>
          </Step>
          <Step>
            <StepLabel>three</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <h3>包含内容</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Stepper orientation="vertical">
          <Step>
            <StepLabel>one</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
          <Step>
            <StepLabel>two</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
          <Step>
            <StepLabel>three</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
        </Stepper>
      </Box>
    </Box>
  );
};

export default Demo;
