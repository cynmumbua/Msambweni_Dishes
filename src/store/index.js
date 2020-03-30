import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: []
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ commit }, plan) {
      try {
        let response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search",
          {
            params: {
              q: plan,
              app_id: "2b8787a4",
              app_key: "98171f7a9c6a072ae2fd219522d93518",
              from: 0,
              to: 9
            },
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }
        );
        commit("setRecipes", response.data.hits);
        // let response = (await axios.get(apiUrl,
        //   {
        //     params:{
        //       page: state.page,
        //       q: plan,
        //       app_id: "2b8787a4",
        //       app_key: "98171f7a9c6a072ae2fd219522d93518",
        //       from: 0,
        //       to: 9
        //     }
        //   }));
        //   commit("setRecipes", re)
      } catch (error) {
        // commit("setRecipes", []);
        console.log(error);
      }
    }
  },
  modules: {}
});
