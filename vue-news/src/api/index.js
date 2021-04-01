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
function fetchApi(url) {
  return axios.get(`${config.baseUrl}/${url}/1.json`);
}

function fetchInfo({ type, id }) {
  return axios.get(`${config.baseUrl}/${type}/${id}.json`);
}

export { fetchApi, fetchInfo };
