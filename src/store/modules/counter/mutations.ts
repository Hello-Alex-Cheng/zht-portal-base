import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { CounterMutationTypes, CounterStateTypes } from './../../interfaces'

export const mutations: MutationTree<CounterStateTypes> & CounterMutationTypes = {
  [MutationTypes.SET_COUNTER] (state: CounterStateTypes, payload: number) {
    state.counter = payload
  },
  [MutationTypes.RESET_COUNTER] (state: CounterStateTypes) {
    state.counter = 0
  }
}
