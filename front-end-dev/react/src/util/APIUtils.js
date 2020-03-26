/** @format */

import { API_BASE_URL, ACCESS_TOKEN } from "../constants";

const request = (options, contentType) => {
  const headers = new Headers();

  if (contentType === "JSON") {
    headers.append("content-type", "application/json");
  } else if (contentType === "formData") {
    // pass
  }

<<<<<<< HEAD
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      console.log(`Response Data : ${json}`)
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
=======
  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append("Authorization", localStorage.getItem(ACCESS_TOKEN));
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);
>>>>>>> 5d6d04d9cba893733439a4fb926a2cd80311ab51

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      if (json.result_code !== "OK") {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const getCurrentUser = () => {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request(
    {
      url: API_BASE_URL + "/user/me",
      method: "GET",
    },
    "JSON"
  );
};

export const login = (loginRequest) => {
  return request(
    {
      url: API_BASE_URL + "/login",
      method: "POST",
      body: JSON.stringify(loginRequest),
    },
    "JSON"
  );
};

<<<<<<< HEAD
export function getAllPaper() {
  return request({
    url: API_BASE_URL + '/getAllPaper',
    method: 'GET'
  })
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
  return request_file(
    {
      url: API_BASE_URL + '/upload_file',
      method: 'POST',
      body: formData
    }  );
}
=======
export const register = (registerRequest) => {
  return request(
    {
      url: API_BASE_URL + "/register",
      method: "POST",
      body: JSON.stringify(registerRequest),
    },
    "JSON"
  );
};

export const uploadFile = (uploadRequest) => {
  return request(
    {
      url: API_BASE_URL + "/upload_file",
      method: "POST",
      body: uploadRequest,
    },
    "formData"
  );
};

export const changePassword = (changePasswordRequest) => {
  return request(
    {
      url: API_BASE_URL + "/changePassword",
      method: "POST",
      body: JSON.stringify(changePasswordRequest),
    },
    "JSON"
  );
};
>>>>>>> 5d6d04d9cba893733439a4fb926a2cd80311ab51
