import React from 'react';
import PropTypes from 'prop-types';

import { Global } from '@iot/jss';
import { useTheme } from '../../theme';

function CssBaseline(props) {
  const { children = null } = props;
  const theme = useTheme();

  return (
    <Global
      styles={{
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        'strong, b': {
          fontWeight: 'bolder',
        },
        body: {
          margin: 0,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          ...theme.typography.body2,
        },
      }}
    >
      {children}
    </Global>
  );
}

CssBaseline.propTypes = {
  children: PropTypes.node,
};

export default CssBaseline;
