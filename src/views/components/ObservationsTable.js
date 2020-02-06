// @flow
import React from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
} from '@material-ui/core';
import format from 'date-fns/format';
import { utcToZonedTime } from 'date-fns-tz';
import type { ObservationsAtRefTime, Observation } from '../../api/types';

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
});

const createTableCells = (
  observations: Array<Observation>, 
  sourceId: string,
  parentIndex: number
) => {
  const initialValues = Array(3).fill(null);
  return observations
    .reduce(
      (values: Array<string>, observation: Observation) => {
        switch (observation.elementId) {
          case 'air_temperature':
            values[0] = observation.value;
            return values;

          case 'wind_speed':
            values[1] = observation.value;
            return values;

          case 'boolean_fair_weather(cloud_area_fraction P1D)':
            values[2] = observation.value === '0' ? 'Cloudy' : 'Sunny';
            return values;

          default:
            return values;
        }
      }, initialValues
    )
    .map((value: string, index: number) =>
        <TableCell 
          align='right' 
          key={`${sourceId}:${parentIndex}-${index}`}
        >
          {value || '-'}
        </TableCell>
      );
};

const createTableRow = (obsAtRefTime: ObservationsAtRefTime, index: number) => {
  const date = utcToZonedTime(obsAtRefTime.referenceTime, 'Europe/Oslo');
  const formattedDate = format(date, 'PPpp');
  return (
    <TableRow hover key={`${obsAtRefTime.sourceId}:${index}`}>
      <TableCell component='th' scope='row'>
        {formattedDate}
      </TableCell>
      {createTableCells(obsAtRefTime.observations, obsAtRefTime.sourceId, index)}
    </TableRow>
  );
};

export default ({ data }: { data: Array<ObservationsAtRefTime>}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date &amp; Time</TableCell>
            <TableCell align='right'>Air Temperature&nbsp;(°C)</TableCell>
            <TableCell align='right'>Wind Speed&nbsp;(m/s)</TableCell>
            <TableCell align='right'>Weather</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(createTableRow)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};