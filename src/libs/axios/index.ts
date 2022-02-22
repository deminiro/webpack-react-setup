import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const api = axios.create({ baseURL: process.env.BACKEND_URL });

// Axios middleware to convert all api responses to camelCase
api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});
// Axios middleware to convert all api requests to snake_case
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  newConfig.url = `${config.url}`;
  if (newConfig.headers['Content-Type'] === 'multipart/form-data')
    return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});
export default api;

export const updateAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
