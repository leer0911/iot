import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './Demo';

storiesOf('Doc', module)
  .addParameters({
    notes: README
  })
  .add('Color System', () => {
    return <Demo></Demo>;
  });
