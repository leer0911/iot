import { storiesOf } from '@storybook/react';
import React from 'react';
import ui from './ui/README.md';
import color from './color/README.md';
import Color from './color/demo';

storiesOf('Doc', module)
  .addParameters({
    notes: ui
  })
  .add('UI System', () => {
    return '';
  })
  .addParameters({
    notes: color
  })
  .add('Color System', () => {
    return <Color></Color>;
  });
