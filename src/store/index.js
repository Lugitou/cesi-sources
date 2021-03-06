import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    id: null,
    username: null,
    amiDansListe: null,
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
});
