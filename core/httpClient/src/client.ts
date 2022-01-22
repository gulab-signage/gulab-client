import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { onFulfilledResponse, onRejectedResponse } from './interceptors';
import type { AxiosInstanceConfig } from './types/axiosInstanceConfig';

/**
 * @class HttpClient wrapper class for axios encapsulating common behaviours we want shared between instances.
 */
class HttpClient {
  readonly instance: AxiosInstance;

  /**
   * Creates an instance of HttpClient.
   * @param {AxiosRequestConfig} config - Custom request config to be merged with the default for this instance.
   * @param {AxiosInstanceConfig} options - Options to define the instance behaviour.
   */
  public constructor(config: AxiosRequestConfig, options: AxiosInstanceConfig = {}) {
    this.instance = axios.create(config);

    // indicates whether cross-site Access-Control requests should be made using credentials
    this.instance.defaults.withCredentials = config.withCredentials ?? true;
    // by default arrays are formatted using `brackets`
    this.instance.defaults.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'comma' });

    this.attachInterceptors(options);
  }

  private attachInterceptors(options: AxiosInstanceConfig) {
    this.instance.interceptors.response.use(onFulfilledResponse(options), onRejectedResponse);
  }
}

export default HttpClient;
