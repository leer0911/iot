import { storiesOf } from '@storybook/react';
import system from './ui-system.md';

storiesOf('Doc', module)
  .addParameters({
    notes: system
  })
  .add('UI System', () => {
    return '';
  });
