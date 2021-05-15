import { ActionTree } from 'vuex'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

import {
  CounterActionTypes,
  CounterStateTypes,
  IRootState
} from '@/store/interfaces'

export const actions: ActionTree<CounterStateTypes, IRootState> & CounterActionTypes = {
  [ActionTypes.GET_COUNTER] ({ commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload)
  }
}
