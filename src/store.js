import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State
const state = {
  isDarkMode: true
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}

// Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
    }
  }
}

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}