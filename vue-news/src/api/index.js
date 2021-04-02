import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

/**
 *
 * @param {string} url request api url
 * @returns {Promise} request result
 */
async function fetchApi(url) {
  try {
    return axios.get(`${config.baseUrl}/${url}/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchInfo({ type, id }) {
  try {
    return axios.get(`${config.baseUrl}/${type}/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}

export { fetchApi, fetchInfo };
