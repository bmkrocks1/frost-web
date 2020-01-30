// @flow
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
  Backdrop,
  CircularProgress,
  FormControl, 
  FormHelperText, 
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import type { Station } from '../../state/types';
import useStations from '../hooks/useStations';
import useTimeIntervals from '../hooks/useTimeIntervals';
import useObservations from '../hooks/useObservations';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      width: 300
    },
  }),
);

export default () => {
  const classes = useStyles();

  const [
    errorStations,
    stations,
    station,
    selectStation
  ] = useStations();

  const [
    timeIntervals,
    timeInterval,
    selectTimeInterval
  ] = useTimeIntervals();

  const [
    loading,
    errorObservations,
    observations,
    clearError
  ] = useObservations();

  const error = errorStations || errorObservations || null;

  const handleStationChange = (event: any) => {
    selectStation(
      stations.find(
        station => station.id === event.target.value
      )
    );
  };

  const handleTimeIntervalChange = (event: any) => {
    selectTimeInterval(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" component="h2">
        Observations ({observations.length})
      </Typography>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="station-select">Station</InputLabel>
          <Select
            className={classes.select}
            labelId="station-select"
            id="station-select"
            value={station ? station.id : ''}
            onChange={handleStationChange}
          >
            {stations.map(({ id, name }: Station) =>
              <MenuItem key={id} value={id}>{id} - {name}</MenuItem>
            )}
          </Select>
          {!station && <FormHelperText>Required</FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="time-interval-select">Time Interval</InputLabel>
          <Select
            className={classes.select}
            labelId="time-interval-select"
            id="time-interval-select"
            value={timeInterval ? timeInterval.name :''}
            onChange={handleTimeIntervalChange}
          >
            {timeIntervals.map((name: string) =>
              <MenuItem key={name} value={name}>{name}</MenuItem>
            )}
          </Select>
          {!timeInterval && <FormHelperText>Required</FormHelperText>}
        </FormControl>
      </div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar 
        open={!!error} 
        autoHideDuration={5000} 
        onClose={clearError}
      >
        <Alert severity="error" onClose={clearError}>
          {error && error.reason}
        </Alert>
      </Snackbar>
    </div>
  );
};
