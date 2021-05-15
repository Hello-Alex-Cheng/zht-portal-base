import {
  CounterStateTypes,
  CounterGettersTypes,
  CounterMutationTypes,
  CounterActionTypes
} from '@/store/interfaces'

import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

export type CounterStoreModuleTypes<S = CounterStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof CounterMutationTypes,
    P extends Parameters<CounterMutationTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CounterMutationTypes[K]>
} & {
  getters: {
    [K in keyof CounterGettersTypes]: ReturnType<CounterGettersTypes[K]>
  }
} & {
  dispatch<K extends keyof CounterActionTypes>(
    key: K,
    payload?: Parameters<CounterActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CounterActionTypes[K]>
}
