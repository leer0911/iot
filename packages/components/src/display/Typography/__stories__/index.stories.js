import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './Demo';

storiesOf('Data Display', module)
  .addParameters({
    notes: README,
  })
  .add('Typography', () => {
    return <Demo></Demo>;
  });
