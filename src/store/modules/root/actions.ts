import { ActionTree } from 'vuex'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { RootActionTypes, IRootState } from '@/store/interfaces'

export const actions: ActionTree<IRootState, IRootState> & RootActionTypes = {
  [ActionTypes.UPDATE_VERSION] ({ commit }, payload: string) {
    commit(MutationTypes.UPDATE_VERSION, payload)
  },
  [ActionTypes.COUNTER_CHECK] ({ dispatch }, payload: boolean) {
    dispatch(ActionTypes.SET_ROOT_DISPATCH, payload)
  }
}
