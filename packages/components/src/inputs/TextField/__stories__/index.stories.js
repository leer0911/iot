import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-webpack-loader-syntax
import DemoRaw from '!raw-loader!./Demo';

import README from './README.md';
import Demo from './Demo';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addParameters({
    notes: README,
  })
  .add('TextField', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
