import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from '@/services/booksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks (state, { books }) {
      state.books = books
    }
  },
  actions: {
    async getBooks (context) {
      const response = await getBooks()
      if (response.ok) {
        context.commit('setBooks', { books: response.data })
      }
    }
  },
  getters: {
    books: state => state.books
  }
})
