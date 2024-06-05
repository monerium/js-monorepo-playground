import ValidationError from 'utils/error';
import { WindowApp } from 'types/app';
import createFetch from '../createFetch';

export const handleError = async (response: Response) => {
  if (!response.ok) {
    try {
      const error = await response.json();
      return Promise.reject(new ValidationError(error));
    } catch (error) {
      return Promise.reject(ValidationError.connectionRefused());
    }
  }
  return response;
};

type OptionsType = RequestInit & { baseUrl?: string; skipHeaders?: boolean };

export const getBaseUrl = (options: OptionsType) =>
  options?.baseUrl === undefined
    ? (<WindowApp>window).App?.apiUrl || ''
    : options?.baseUrl;

export const handleResponse = (response: Response) => response.json();

export const getBody = (data: unknown) => {
  if (data) {
    if (typeof data === 'string' || data instanceof FormData) return data;
    if (typeof data === 'object') return JSON.stringify(data);
  }
  return undefined;
};

const request = (url: string, options: OptionsType = {}) => {
  const baseUrl =
    options?.baseUrl === undefined
      ? (<WindowApp>window).App?.apiUrl || ''
      : options?.baseUrl;

  const appFetch = createFetch(fetch, {
    baseUrl,
    cookie: null,
  });
  try {
    return appFetch(url, options).then(handleError);
  } catch (error) {
    return Promise.reject(error);
  }
};

const post = <T>(
  url: string,
  data?: unknown,
  options: OptionsType = {},
): Promise<T> =>
  request(url, {
    method: 'POST',
    body: getBody(data),
    ...options,
  }).then(handleResponse);
const get = <T>(url: string, options: OptionsType = {}): Promise<T> =>
  request(url, {
    method: 'GET',
    ...options,
  }).then(handleResponse);
const put = <T>(
  url: string,
  data?: unknown,
  options: OptionsType = {},
): Promise<T> =>
  request(url, {
    method: 'PUT',
    body: getBody(data),
    ...options,
  }).then(handleResponse);
const patch = <T>(
  url: string,
  data?: unknown,
  options: OptionsType = {},
): Promise<T> =>
  request(url, {
    method: 'PATCH',
    body: getBody(data),
    ...options,
  }).then(handleResponse);
const del = (url: string, data?: unknown, options: OptionsType = {}) =>
  request(url, {
    method: 'DELETE',
    body: getBody(data),
    ...options,
  });

const upload = (
  url: string,
  data?: Record<string, string | File>,
  options: OptionsType = {},
) => {
  const formData = new FormData();
  if (data && typeof data === 'object') {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      formData.append(key, data[key]);
    }
  }
  return request(url, {
    method: 'POST',
    body: formData,
    skipHeaders: true,
    ...options,
  }).then(handleResponse);
};

export default {
  request,
  get,
  post,
  put,
  patch,
  del,
  upload,
};
