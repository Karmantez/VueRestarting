import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

const createInstance = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
};

/**
 * axios 설정 초기화 함수
 * @returns
 */
const createInstanceWithAuth = url => {
  return setInterceptors(
    axios.create({
      baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    }),
  );
};
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
