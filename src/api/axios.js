import axios from "axios";
// 超时时间
axios.defaults.timeout = 25000;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


// http请求拦截器
// const CancelToken = axios.CancelToken;
axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json";

    if (config.method == "get") {
      config.params = {
        _: Date.now(),
        ...config.params
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function get(url, params = {}, headers = {}, option = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "GET",
      headers,
      params,
      ...option
    }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

function post(url, data = {}, headers = {}, option = {}) {
  //普通的post请求
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "POST",
      headers,
      data,
      ...option
    }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

export {
  post,
  get
};
