import store from '@/store';

const setInterceptors = instance => {
  // Add interceptors for request
  instance.interceptors.request.use(
    config => {
      // Add token data to headers
      config.headers.Authorization = store.state.token;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // Add interceptors for response
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export { setInterceptors };
