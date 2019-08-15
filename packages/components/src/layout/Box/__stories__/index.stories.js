import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Layout', module)
  .addParameters({
    notes: README
  })
  .add('Box', () => <Demo />);
