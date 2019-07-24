import { configure, addParameters, addDecorator } from '@storybook/react';

addParameters({
  options: {
    panelPosition: 'right'
  },
  viewport: {
    defaultViewport: 'iphone6'
  }
});

const comps = require.context('@project/components/src', true, /.stories.js$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
