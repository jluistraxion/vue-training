export default {
  namespaced: true,
  state: {
    loading: false,
    products: []
  },
  getters: {},
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    setProducts(state, payload){
      state.products = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      commit('setLoading', true)
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        commit('setProducts', data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        commit('setLoading', false)
      }
    },
    async storeProduct({commit, dispatch}, payload){
      commit('setLoading', true)
      const errorObj = { success: false, message: 'There was an error, please try again' }
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        if (data.id) {
          return { success: true }
        } else {
          return errorObj
        }
      } catch (error) {
        return errorObj
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
