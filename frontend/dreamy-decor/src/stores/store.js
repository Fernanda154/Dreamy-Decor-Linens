import { createStore } from 'vuex'

export const store = createStore({
  state: {
    cartItems: 0
  },
  mutations: {
    updateCartItems(state, payload) {
      state.cartItems = payload
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('updateCartItems', payload)
    }
  }
})
