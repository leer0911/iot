import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addParameters({
    notes: README,
  })
  .add('Demo', () => <Demo />);
