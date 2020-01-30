// @flow
export type SourceType = 'SensorSystem' | 'InterpolatedDataset' | 'RegionDataset';
export type ResponseType = 'ErrorResponse' | 'SourceResponse' | 'ObservationResponse';

// -- Frost Entity Types

export type Source<T = SourceType> = {
  '@type': T,
  id: string,
  name: string,
  shortName: string,
  country: string,
  countryCode: string,
  validFrom: string,
  validTo: string,
  county: string,
  countyId: string,
  municipality: string
};

export type Observation = {
  elementId: string,
  value: string,
  unit: string,
  codeTable: string,
  timeOffset: string,
  timeResolution: string
};

export type ObservationsAtRefTime = {
  sourceId: string,
  referenceTime: string,
  observations: Array<Observation>
};

// -- Response Types

export type Error = {
  code: number,
  message: string,
  reason: string
};

export type BaseResponse<R = ResponseType, T = any> = {
  '@context': string,
  '@type': R,
  apiVersion: string,
  license: string,
  createdAt: string,
  queryTime: string,
  currentItemCount?: string,
  itemsPerPage?: number,
  offset?: number,
  totalItemCount?: number,
  nextLink?: string,
  previousLink?: string,
  currentLink: string,
  data?: Array<T>,
  error?: Error
};

export type ErrorResponse = BaseResponse<'ErrorResponse'>;
export type SourceResponse = BaseResponse<'SourceResponse', Source<SourceType>>;
export type ObservationResponse = BaseResponse<'ObservationResponse', ObservationsAtRefTime>;

// -- Filter Types

export type SourcesFilter = {
  ids?: string,
  types?: SourceType,
  name?: string,
  country?: string,
  county?: string,
  municipality?: string,
  fields?: string
};

export type ObservationsFilter = {
  sources: string,
  referencetime: string,
  elements: string
};
