// @flow
import { 
  GET_ASYNC,
  GET_SUCCESS, 
  GET_ERROR,
  GET_STATIONS_SUCCESS,
  GET_STATIONS_ERROR,
  SET_STATION, 
  SET_TIME_INTERVAL,
  CLEAR_ERROR
} from './actions';
import type { Action, ObservationsState } from '../types';

const initialState: ObservationsState = {
  stationsFilter: {
    types: 'SensorSystem',
    country: 'NO',
    municipality: 'OSLO'
  },
  stations: [],
  station: null,
  timeIntervals: [
    'Today',
    'Yesterday',
    'Last 7 Days',
    'Last 30 Days'
  ],
  timeInterval: null,
  observations: [],
  elements: [
    'air_temperature', 
    'wind_speed', 
    'boolean_fair_weather(cloud_area_fraction P1D)'
  ],
  error: null,
  loading: false,
};

export default (
  state: ObservationsState = initialState, 
  action: Action
): ObservationsState => {
  switch (action.type) {
    case GET_ASYNC:
      return { 
        ...state, 
        loading: true,
        observations: [],
        error: null
      };

    case GET_SUCCESS:
      return { 
        ...state, 
        observations: action.payload.data,
        error: null,
        loading: false
      };

    case GET_ERROR:
      return { 
        ...state, 
        error: action.payload.error,
        observations: [],
        loading: false
      };

    case GET_STATIONS_SUCCESS:
      return {
        ...state,
        stations: action.payload.data
      };

    case GET_STATIONS_ERROR:
      return {
        ...state,
        error: action.payload.error
      };

    case SET_STATION:
      return {
        ...state,
        station: action.payload
      };

    case SET_TIME_INTERVAL:
      return {
        ...state,
        timeInterval: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
