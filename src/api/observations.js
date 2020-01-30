// @flow
import { AxiosResponse } from 'axios';
import http from './http';
import type { ObservationResponse, ObservationsFilter } from './types';

export default {

  /**
   * Retrieves observation data.
   * 
   * @param {ObservationsFilter} params Query parameters.
   */
  async getObservations(params: ObservationsFilter): AxiosResponse<ObservationResponse> {
    return await http.get('observations/v0.jsonld', { params });
  }
};
