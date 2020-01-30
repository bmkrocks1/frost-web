// @flow
import { ThunkAction } from 'redux-thunk';
import ObservationsAPI from '../../api/observations';
import SourcesAPI from '../../api/sources';
import type { ObservationsFilter } from '../../api/types';
import type { State, ObservationsState, Station, TimeInterval, Action } from '../types';

const getObservationsState = (getState: () => State): ObservationsState => 
  getState().observations;

const createObservationsFilter = (
  statePortion: { 
    station: ?Station, 
    timeInterval: ?TimeInterval,
    elements: Array<string>
  }
): ?ObservationsFilter => {
  const { station, timeInterval, elements } = statePortion;
  return (station && timeInterval) 
    ? {
      sources: station.id,
      referencetime: `${timeInterval.from}/${timeInterval.to}`,
      elements: elements.join(',')
    }
    : null;
};

// -- Action Types

export const GET_ASYNC = 'observations/GET_OBSERVATIONS_ASYNC';
export const GET_SUCCESS = 'observations/GET_OBSERVATIONS_SUCCESS';
export const GET_ERROR = 'observations/GET_OBSERVATIONS_ERROR';
export const GET_STATIONS_ASYNC = 'observations/GET_STATIONS_ASYNC';
export const GET_STATIONS_SUCCESS = 'observations/GET_STATIONS_SUCCESS';
export const GET_STATIONS_ERROR = 'observations/GET_STATIONS_ERROR';
export const SET_STATION = 'observations/SET_STATION';
export const SET_TIME_INTERVAL = 'observations/SET_TIME_INTERVAL';
export const CLEAR_ERROR = 'observations/CLEAR_ERROR';

// -- Action Creators

export const getObservations = (): ThunkAction => {
  return async (dispatch, getState) => {
    const state = getObservationsState(getState);
    const filter = createObservationsFilter({ ...state });

    if (filter) {
      dispatch({
        type: GET_ASYNC,
        payload: null
      });

      try {
        const response = await ObservationsAPI.getObservations(filter);

        dispatch({
          type: GET_SUCCESS,
          payload: response.data
        });
      } catch (error) {
        dispatch({
          type: GET_ERROR,
          payload: error.response.data
        });
      }
    }
  };
};

export const getStations = (): ThunkAction => {
  return async (dispatch, getState) => {
    const filter = getObservationsState(getState).stationsFilter;
  
    try {
      dispatch({
        type: GET_STATIONS_ASYNC,
        payload: null
      });

      const response = await SourcesAPI.getSources(filter);

      dispatch({
        type: GET_STATIONS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: GET_STATIONS_ERROR,
        payload: error.response.data
      });
    }
  };
};

export const setStation = (station: Station): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_STATION,
      payload: station
    });

    await getObservations()(dispatch, getState);
  };
};

export const setTimeInterval = (timeInterval: TimeInterval): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_TIME_INTERVAL,
      payload: timeInterval
    });

    await getObservations()(dispatch, getState);
  };
};

export const clearError = (): Action => ({
  type: CLEAR_ERROR,
  payload: null
});
