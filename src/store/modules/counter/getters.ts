import { GetterTree } from 'vuex'

import {
  CounterGettersTypes,
  CounterStateTypes,
  IRootState
} from './../../interfaces'

export const getters: GetterTree<CounterStateTypes, IRootState> & CounterGettersTypes = {
  counterValue: (state: CounterStateTypes) => {
    return state.counter || 0
  },
  doubleCounter: (state: CounterStateTypes) => {
    return state.counter || 0 * 2
  }
}
