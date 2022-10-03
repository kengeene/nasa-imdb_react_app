import axios from 'axios';

// create an axios instance
const service = axios.create({
  timeout: 0 // request timeout
});

// request interceptor
service.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    return response;
  },
  (err) => {
    throw err;
  }
);

export default service;
