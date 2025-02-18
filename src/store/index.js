import { createStore } from 'vuex'
import products from '@/store/modules/products.js'

export default createStore({
  modules: {
    products
  }
})