import { configure, addParameters, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(jsxDecorator);
addDecorator(withKnobs);

addParameters({
  options: {
    panelPosition: 'right',
  },
  viewport: {
    defaultViewport: 'iphone6',
  },
});

const comps = require.context('@iot/components/src', true, /.stories.js$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
