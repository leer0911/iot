import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Button', module)
  .addParameters({
    notes: README
  })
  .add('demo', () => <Demo />);
