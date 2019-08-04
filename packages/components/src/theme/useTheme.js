import React from 'react';
import ThemeContext from './ThemeContext';
import defaultTheme from './defaultTheme';

export default function useTheme() {
  return React.useContext(ThemeContext) || defaultTheme;
}
