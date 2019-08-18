import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './Demo';

storiesOf('Inputs', module)
  .addParameters({
    notes: README,
  })
  .add('InputBase', () => <Demo />);
