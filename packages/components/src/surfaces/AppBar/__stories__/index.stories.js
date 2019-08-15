import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Surfaces', module)
  .addParameters({
    notes: README
  })
  .add('AppBar', () => <Demo />);
