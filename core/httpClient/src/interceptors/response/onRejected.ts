import type { ResponseError } from '../../types/responseError';

function getSimplifiedError(error: ResponseError): string | undefined {
  if (error?.response?.data) {
    if (error?.response?.data.message) {
      return error?.response?.data.message;
    }

    if (error?.response?.data.error) {
      return error?.response?.data.error;
    }
  }

  return undefined;
}

/**
 * Update the error with unified error property.
 * @param {ResponseError} error - Error received in the response.
 * @returns Promise with the updated error.
 */
function onRejected(error: ResponseError): Promise<never> {
  const nextError = error;

  if (nextError?.response?.data) {
    if (typeof nextError?.response?.data === 'string') {
      nextError.response.data = { simplified: nextError?.response?.data };
    } else {
      nextError.response.data.simplified = getSimplifiedError(nextError);
    }
  }

  return Promise.reject(nextError);
}

export default onRejected;
