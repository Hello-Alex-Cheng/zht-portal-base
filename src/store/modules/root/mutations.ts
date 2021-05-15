import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { RootMutationsTypes, IRootState } from '@/store/interfaces'

export const mutations: MutationTree<IRootState> & RootMutationsTypes = {
  [MutationTypes.UPDATE_VERSION] (state: IRootState, payload: string) {
    state.version = payload
  }
}
