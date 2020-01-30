// @flow
import type { 
  Error,
  ObservationsFilter,
  ObservationsAtRefTime,
  SourcesFilter
} from '../api/types';

export type Station = {
  id: string,
  name: string,
  shortName: string,
  municipality: string
};

export type TimeInterval = {
  name: string,
  from: string,
  to: string
};

// -- State

export type State = $ReadOnly<{
  observations: ObservationsState
}>;

export type ObservationsState = $ReadOnly<{|
  stationsFilter: SourcesFilter,
  stations: Array<Station>,
  station: ?Station,
  timeIntervals: Array<string>,
  timeInterval: ?TimeInterval,
  elements: Array<string>,
  observations: Array<ObservationsAtRefTime>,
  error: ?Error,
  loading: boolean
|}>;

// -- Action

export type Action = $ReadOnly<{|
  type: string,
  payload: any
|}>;
