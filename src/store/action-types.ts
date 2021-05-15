import { ActionTypes as counterTypes } from './modules/counter/action-types'
import { ActionTypes as rootATypes } from './modules/root/action-types'

export const AllActionTypes = {
  ...counterTypes,
  ...rootATypes
}
