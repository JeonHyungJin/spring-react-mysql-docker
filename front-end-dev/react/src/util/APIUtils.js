/** @format */

import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = options => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  console.log(options);

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      if (json.result_code !== 'OK') {
        return Promise.reject(json);
      }
      return json;
    })
  );
};
const request_file = options => {
  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      if (json.result_code !== 'OK') {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getCurrentUser() {
  const access_token = localStorage.getItem(ACCESS_TOKEN);
  if (!access_token) {
    return Promise.reject('No access token set.');
  }

  return request({
    url: API_BASE_URL + '/user/me',
    method: 'POST',
    body: JSON.stringify(access_token)
  });
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + '/login',
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}
export function register(registerRequest) {
  return request({
    url: API_BASE_URL + '/register',
    method: 'POST',
    body: JSON.stringify(registerRequest)
  });
}
export function uploadFile(formData) {
  return request_file({
    url: API_BASE_URL + '/upload_file',
    method: 'POST',
    body: formData
  });
}
export function uploadPaper(uploadRequest) {
  return request({
    url: API_BASE_URL + '/upload',
    method: 'POST',
    body: JSON.stringify(uploadRequest)
  });
}
