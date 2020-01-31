import Cookies from "js-cookie";

const UserToken = "vuetify-admin-token";

export function getToken() {
  return Cookies.get(UserToken);
}

export function setToken(token) {
  return Cookies.set(UserToken, token);
}

export function removeToken() {
  return Cookies.remove(UserToken);
}
