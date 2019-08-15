import { storiesOf } from '@storybook/react';
import ui from './ui/README.md';

storiesOf('Doc', module)
  .addParameters({
    notes: ui
  })
  .add('UI System', () => {
    return '';
  });
