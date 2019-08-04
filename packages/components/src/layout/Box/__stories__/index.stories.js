import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Box', module)
  .addParameters({
    notes: README
  })
  .add('demo', () => <Demo />);
