// @flow
import { useSelector, useDispatch } from 'react-redux';
import type { State } from '../../state/types';
import { setTimeInterval } from '../../state/observations/actions';
import formatter from '../utils/timeIntervalFormatter';

export default () => {
  const dispatch = useDispatch();
  const { timeIntervals, timeInterval }  = useSelector(
    ({ observations }: State) => observations
  );

  return [
    timeIntervals, // <-- list of time intervals
    timeInterval, // <-- selected time interval
    (name: ?string) => { // <-- dispatcher
      if (name && formatter[name]) {
        const [from, to] = formatter[name]();
        dispatch(setTimeInterval({ name, from, to }));
      }
    }
  ];
};
