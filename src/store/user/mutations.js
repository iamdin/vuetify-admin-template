export default {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_INFO(state, payload) {
    state.info = payload;
  },
  FONT_LOGOUT(state) {
    state.token = "";
    state.info = {
      roles: []
    };
  }
};
