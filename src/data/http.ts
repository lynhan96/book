import axios from 'axios';
import { getAuthCredentials } from './function';

const apiRequest = axios.create();
apiRequest.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
apiRequest.interceptors.request.use(async function (config) {
  const headers = getAuthCredentials();

  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Content-Type'] = 'application/json';
  config.headers['access-token'] = headers?.accessToken;
  config.headers.client = headers?.client;
  config.headers.expiry = headers?.expiry;
  config.headers.uid = headers?.uid;
  config.headers.role = headers?.role;
  config.headers.currentClinicId = headers?.currentClinicId;

  return config;
});

apiRequest.interceptors.response.use(
  (response) => {
    return {
      headers: {
        accessToken: response.headers['access-token'],
        client: response.headers.client,
        expiry: response.headers.expiry,
        uid: response.headers.uid,
      },
      data: response.data,
    };
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default apiRequest;
