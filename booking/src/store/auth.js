import { reactive, readonly } from 'vue';

const state = reactive({
  isLoggedIn: false
});

const methods = {
  login() {
    state.isLoggedIn = true;
  },
  logout() {
    state.isLoggedIn = false;
  },
  initializeAuth() {
    state.isLoggedIn = localStorage.getItem('access_token') !== null;
  }
};

export default {
  state: readonly(state),
  methods
};