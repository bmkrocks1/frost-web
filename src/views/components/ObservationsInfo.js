// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import type { Station, TimeInterval } from '../../state/types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    marginTop: 15,
    marginBottom: 20,
  },
}));

const createTypography = (label: string, value: string | number) => {
  return (
    <Typography 
      variant="body2" 
      color="textSecondary" 
      component="div"
      gutterBottom
    >
      {label}:&nbsp;
      <Typography variant="body2" color="textPrimary" display="inline">
        {value}
      </Typography>
    </Typography>
  );
};

export default (props: {
  station: Station,
  timeInterval: TimeInterval,
  count: number
}) => {
  const classes = useStyles();
  const { station, timeInterval, count } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography 
          variant="overline" 
          component="h6"
          gutterBottom
        >
          <strong>Information</strong>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            {createTypography('Station ID', station ? station.id : '')}
            {createTypography('Name', station ? station.name : '')}
            {createTypography('Short Name', station ? station.shortName : '')}
            {createTypography('Municipality', station ? station.municipality : '')}
          </Grid>
          <Grid item xs>
            {createTypography('Reference Time', timeInterval ? 
              `${timeInterval.from}/${timeInterval.to}` : ''
            )}
            {createTypography('Observations Count', station && timeInterval ?
              count : ''
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
