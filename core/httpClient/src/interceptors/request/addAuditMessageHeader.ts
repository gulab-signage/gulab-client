import { replacePlaceholdersWithValues } from '@gulab-client/utils';
import type { AxiosRequestConfig, Method } from 'axios';
import { URLPattern } from 'urlpattern-polyfill';

export type AuditMessageConfig = {
  message: string;
  paths?: Record<string, string[]>;
  useHttpMethod?: boolean;
};

export type EndpointConfigType = Record<string, Record<string, Record<string, AuditMessageConfig>>>;

const HttpMethodMap: Map<Method, string> = new Map<Method, string>();
HttpMethodMap.set('DELETE', 'Delete');
HttpMethodMap.set('GET', 'Get');
HttpMethodMap.set('POST', 'Create');
HttpMethodMap.set('PUT', 'Update');

// TODO: Configuration should be passed to the constructor for each service individually.
const EndpointConfig: EndpointConfigType = {
  '[process.env.REACT_APP_DISPLAYS_API]': {
    '/manage/display': {
      '/:displayId/presentation': {
        message: '{presentationId} presentation',
        paths: {
          presentationId: ['presentation', 'id'],
        },
        useHttpMethod: true,
      },
      '/:displayId/changeIsActive': {
        message: 'Change display IsActive',
      },
    },
  },
};

function apiMethodPatternMatchingURL(url: string) {
  return function apiMethodPatternMatchingURLCallback(method: string): boolean {
    // TODO: This might be expensive to be executed on each request?
    const pattern = new URLPattern({ pathname: method });
    return pattern.test(url);
  };
}

function getAuditMessage(config: AuditMessageConfig, method: Method, data?: Record<string, unknown>): string {
  const { message, paths, useHttpMethod } = config;
  let auditMessage = message;

  if (paths && data) {
    auditMessage = replacePlaceholdersWithValues(auditMessage, data, paths);
  }

  if (useHttpMethod) {
    auditMessage = `${HttpMethodMap.get(method) ?? method} ${auditMessage}`;
  }

  return auditMessage;
}

function addAuditMessageHeader(config: AxiosRequestConfig): AxiosRequestConfig {
  try {
    const { baseURL, url, method, headers } = config;

    if (baseURL !== undefined && url !== undefined) {
      const [apiUrl, apiEndpoint] = baseURL.split('/api');

      if (apiUrl !== undefined && apiEndpoint !== undefined) {
        const apiEndpointMethods = Object.keys(EndpointConfig[apiUrl][apiEndpoint]);

        if (apiEndpointMethods !== undefined) {
          const endpointMethod = apiEndpointMethods.find(apiMethodPatternMatchingURL(url));

          if (endpointMethod !== undefined) {
            const methodConfig = EndpointConfig[apiUrl][apiEndpoint][endpointMethod];
            const message = getAuditMessage(methodConfig, method ?? 'GET', config.data as Record<string, unknown>);

            if (headers) {
              if (headers.auditmessage) {
                headers.auditmessage = `${message}; ${headers.auditmessage as string}`;
              } else {
                headers.auditmessage = `${message};`;
              }
            }
          }
        }
      }
    }

    return config;
  } catch (error) {
    // TODO: Log error.
    return config;
  }
}

export default addAuditMessageHeader;
