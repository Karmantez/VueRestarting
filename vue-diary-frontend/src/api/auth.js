// 로그인, 회원가입 API 기능
import { instance } from '@/api';

/**
 * 회원가입 API
 * @param {*} userData
 * @returns
 */
const registerUser = userData => {
  return instance.post('signup', userData);
};

/**
 * 로그인 API
 * @param {*} userData
 * @returns
 */
const loginUser = userData => {
  return instance.post('login', userData);
};

export { registerUser, loginUser };
