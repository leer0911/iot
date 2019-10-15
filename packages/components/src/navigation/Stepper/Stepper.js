import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Paper from '../../surfaces/Paper';
import StepConnector from '../StepConnector';

export const styles = {
  root: {
    display: 'flex',
    padding: 24,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
  alternativeLabel: {
    alignItems: 'flex-start',
  },
};

const defaultConnector = <StepConnector />;

const Stepper = props => {
  const {
    children,
    className: classNameProp,
    connector: connectorProp = defaultConnector,
    orientation = 'horizontal',
    activeStep = 0,
    alternativeLabel = false,
    nonLinear = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    classes[orientation],
    {
      [classes.alternativeLabel]: alternativeLabel,
    },
    classNameProp,
  );

  const connector = React.isValidElement(connectorProp)
    ? React.cloneElement(connectorProp, { orientation })
    : null;
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step, index) => {
    const controlProps = {
      alternativeLabel,
      connector: connectorProp,
      last: index + 1 === childrenArray.length,
      orientation,
    };

    const state = {
      index,
      active: false,
      completed: false,
      disabled: false,
    };

    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }

    return [
      !alternativeLabel &&
        connector &&
        index !== 0 &&
        React.cloneElement(connector, {
          key: index,
          ...state,
        }),
      React.cloneElement(step, { ...controlProps, ...state, ...step.props }),
    ];
  });

  return (
    <Paper square elevation={0} className={className} {...other}>
      {steps}
    </Paper>
  );
};

Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  activeStep: PropTypes.number,
  alternativeLabel: PropTypes.bool,
  connector: PropTypes.element,
  nonLinear: PropTypes.bool,
};

export default Stepper;
