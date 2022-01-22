import type { AxiosResponse } from 'axios';
import type { AxiosInstanceConfig } from '../../types/axiosInstanceConfig';

/**
 * Return the data property from axios response.
 * @param {AxiosResponse} response Request response.
 * @returns {T} The value of the data property.
 */
function extractData<T, D>(response: AxiosResponse<T, D>): T {
  return response.data;
}

function onFulfilled(options: AxiosInstanceConfig) {
  const { disableExtractDataInterceptor } = options;

  return function onFulfilledCallback<T, D>(response: AxiosResponse<T, D>): AxiosResponse<T, D> | T {
    if (disableExtractDataInterceptor === true) {
      return response;
    }

    return extractData(response);
  };
}

export default onFulfilled;
