import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import DemoRaw from '!raw-loader!./Demo';

import README from './README.md';
import Demo from './Demo';

storiesOf('Doc', module)
  .addParameters({
    notes: README,
  })
  .add('Color System', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
