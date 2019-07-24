import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';

storiesOf('Navbar', module)
  .addParameters({
    notes: README
  })
  .add('基础使用', () => <Demo />);
