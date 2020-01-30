// @flow
import { useSelector, useDispatch } from 'react-redux';
import type { State } from '../../state/types';
import { clearError } from '../../state/observations/actions';

export default () => {
  const dispatch = useDispatch();
  const { loading, error, observations } = useSelector(
    ({ observations }: State) => observations
  );

  return [
    loading, // <-- loading indicator
    error, // <-- error object, if any
    observations, // <-- list of observations
    () => { // <-- clearError
      dispatch(clearError());
    }
  ];
};
