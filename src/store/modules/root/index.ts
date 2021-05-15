import { Module, ModuleTree } from 'vuex'
import { IRootState } from '@/store/interfaces'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'

import counterModule from '../counter'

// root module 聚集所有的子 module
const modules: ModuleTree<IRootState> = {
  counterModule
}

// root module
const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules
}

export default root
