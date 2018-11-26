import Vuex from 'vuex'
import modules from './modules'

export default () => {
  return new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production'
  })
}
