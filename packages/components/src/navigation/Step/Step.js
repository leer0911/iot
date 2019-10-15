import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = {
  root: {},
  completed: {},
  vertical: {},
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  alternativeLabel: {
    flex: 1,
    position: 'relative',
  },
};

const Step = props => {
  const {
    children,
    className: classNameProp,
    orientation,
    connector,
    index,
    last,
    active = false,
    alternativeLabel,
    completed = false,
    disabled = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    classes[orientation],
    {
      [classes.alternativeLabel]: alternativeLabel,
      [classes.completed]: completed,
    },
    classNameProp,
  );

  return (
    <div className={className} {...other}>
      {connector &&
        alternativeLabel &&
        index !== 0 &&
        React.cloneElement(connector, {
          orientation,
          alternativeLabel,
          index,
          active,
          completed,
          disabled,
        })}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          active,
          alternativeLabel,
          completed,
          disabled,
          last,
          icon: index + 1,
          orientation,
          ...child.props,
        });
      })}
    </div>
  );
};

Step.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  connector: PropTypes.element,
  index: PropTypes.number,
  last: PropTypes.bool,
  alternativeLabel: PropTypes.bool,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Step;
