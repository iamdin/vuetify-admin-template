import "../plugins/axios";

// eslint-disable-next-line no-unused-vars,no-undef
const _axios = axios;

export function login(data) {
  return _axios.post("/login", data);
}
