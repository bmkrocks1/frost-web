// @flow
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { Station, State } from '../../state/types';
import { getStations, setStation, clearError } from '../../state/observations/actions';

export default () => {
  const dispatch = useDispatch();
  const { error, stations, station } = useSelector(
    ({ observations }: State) => observations
  );

  useEffect(() => {
    dispatch(getStations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    error, // <-- error object, if any
    stations, // <-- list of stations
    station, // <-- selected station
    (station: ?Station) => { // <-- selectStation
      if (station) {
        dispatch(setStation(station));
      }
    },
    () => { // <-- clearError
      dispatch(clearError());
    }
  ];
};
