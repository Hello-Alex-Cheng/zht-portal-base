import { ActionContext, DispatchOptions } from "vuex"
import { MutationTypes as CounterMTypes } from './modules/counter/mutation-types'
import { ActionTypes as CounterATypes } from './modules/counter/action-types'
import { MutationTypes as RootMTypes } from './modules/root/mutation-types'
import { ActionTypes as RootATypes } from './modules/root/action-types'


/***** @root types  *****/

export interface IRootState {
  root: boolean
  version: string
}

// 所有类型的集合
export interface ImergedState extends IRootState {
  counterModule: CounterStateTypes
}

export interface IRootGettersTypes {
  getVersion(state: IRootState): string
}

export type RootMutationsTypes<S = IRootState> = {
  [RootMTypes.UPDATE_VERSION](state: S, payload: string): void
}

// Omit 从已有对象中剔除给定属性构建出一个没有指定属性的新对象类型（与 Pick 相反），这里就剔除了 'commit'
// Parameters 能够获取函数类型 T 的参数类型，并使用参数类型构造一个元素类型
// ReturnType 能够获取函数类型 T 的返回值类型，即 StoreActions[K] 的返回值类型
type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
  dispatch<K extends keyof StoreActions>(
    key: K,
    payload?: Parameters<StoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StoreActions[K]>;
}

export interface RootActionTypes {
  [RootATypes.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void
  [RootATypes.COUNTER_CHECK](
    { commit }: AugmentedActionContextRoot,
    payload: boolean
  ): void
}



/********** @counter module types **********/

export interface CounterStateTypes {
  counter?: number
  rootDispatch?: boolean
}

// counter 的 getters 操作
export interface CounterGettersTypes {
  doubleCounter(state: CounterStateTypes): number
  counterValue(state: CounterStateTypes): number
}

// counter 的 mutations 操作
export type CounterMutationTypes<S = CounterStateTypes> = {
  [CounterMTypes.SET_COUNTER](state: S, payload: number): void
  [CounterMTypes.RESET_COUNTER](state: S): void
}

// 定义 action 的 commit 类型
export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationTypes>(
    key: K,
    payload: Parameters<CounterMutationTypes[K]>[1]
  ): ReturnType<CounterMutationTypes[K]>
} & Omit<ActionContext<CounterStateTypes, IRootState>, 'commit'>

// counter 的 actions 操作
export interface CounterActionTypes {
  [CounterATypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
}

export interface StoreActions extends
  RootActionTypes,
  CounterActionTypes {}

export interface StoreGetters extends
  IRootGettersTypes,
  CounterGettersTypes {}
