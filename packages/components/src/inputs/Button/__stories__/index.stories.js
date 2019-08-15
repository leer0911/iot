import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Inputs', module)
  .addParameters({
    notes: README
  })
  .add('Button', () => <Demo />);
