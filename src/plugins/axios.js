"use strict";

import Vue from "vue";
import axios from "axios";
import { getToken } from "../util/cookie";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
  baseURL: process.env.VUE_APP_APIURL || process.env.apiUrl || "",
  // timeout: 60 * 1000, // Timeout
  headers: {
    "Content-Type": "application/json",
    Authorization: getToken()
  },
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if (process.env.NODE_ENV === "development") {
      console.log(config);
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (process.env.NODE_ENV === "development") {
      console.log(response);
    }
    return response.data;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
