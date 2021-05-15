import { createStore, useStore as VuexStore } from 'vuex'
import { IRootState } from './interfaces'
import { CounterStoreModuleTypes } from './modules/counter/types'
import { RootStoreModuleTypes } from './modules/root/types'

import root from './modules/root'

export const store = createStore<IRootState>(root)

type StoreModules = {
  counterModule: CounterStoreModuleTypes,
  root: RootStoreModuleTypes
}

// Pick 从已有对象中选取给定的属性及其类型，构建出一个新的对象类型
export type Store = CounterStoreModuleTypes<
  Pick<StoreModules, 'counterModule'>
> &
  RootStoreModuleTypes<Pick<StoreModules, 'root'>>

export function useStore (): Store {
  return VuexStore() as Store
}
