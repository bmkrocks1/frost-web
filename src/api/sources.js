// @flow
import { AxiosResponse } from 'axios';
import http from './http';
import type { SourceResponse, SourcesFilter } from './types';

export default {

  /**
   * Retrieves metadata for the source entities defined in the Frost API.
   * 
   * @param {SourcesFilter} params (optional) Query parameters.
   */
  async getSources(params: SourcesFilter = {}): AxiosResponse<SourceResponse> {
    return await http.get('sources/v0.jsonld', { params });
  }
};
