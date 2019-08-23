import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll',
};

export default function ScrollbarSize(props) {
  const { onChange, ...other } = props;
  const scrollbarHeight = React.useRef();
  const nodeRef = React.useRef(null);

  const setMeasurements = () => {
    scrollbarHeight.current =
      nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  React.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);

  return <div style={styles} ref={nodeRef} {...other} />;
}

ScrollbarSize.propTypes = {
  onChange: PropTypes.func.isRequired,
};
