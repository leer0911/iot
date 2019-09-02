import React from 'react';
import { CircularProgress, Box, Fab, Button } from '../../../';
import { cx } from 'emotion';
import { useClasses } from '../../../styles';
import Knobs from './Knobs.js';
import { green } from '../../../colors';
import SearchIcon from '../../../icon/Search';
import WorkIcon from '../../../icon/Work';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

const Demo = () => {
  const classes = useClasses(styles);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = cx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  }
  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>color</h3>
      <CircularProgress color="secondary" />

      <h3>与元素集成</h3>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab
            aria-label="save"
            color="primary"
            className={buttonClassname}
            onClick={handleButtonClick}
          >
            {success ? <SearchIcon /> : <WorkIcon />}
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={handleButtonClick}
            size="large"
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    </Box>
  );
};

export default Demo;
