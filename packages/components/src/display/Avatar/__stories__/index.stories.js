import React from 'react';
import { storiesOf } from '@storybook/react';

import README from './README.md';
import Demo from './Demo';

storiesOf('Data Display', module)
  .addParameters({
    notes: README,
  })
  .add('Avatar', () => <Demo />);
