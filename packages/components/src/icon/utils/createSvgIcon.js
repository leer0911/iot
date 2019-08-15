import React from 'react';
import SvgIcon from '../../display/SvgIcon';

export default function createSvgIcon(path, displayName) {
  const Component = React.memo(props => <SvgIcon {...props}>{path}</SvgIcon>);
  return Component;
}
