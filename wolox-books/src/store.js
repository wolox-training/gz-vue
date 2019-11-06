import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from '@/services/booksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    async getBooks ({ commit }) {
      const response = await getBooks()
      if (response.ok) {
        commit('setBooks', response.data)
      }
    }
  }
})
