import { types } from '../types/types'

const initialState = {
  item: [],
  search: []
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.itemLoaded:
      return {
        ...state,
        item: action.payload
      }
    case types.searchLoaded:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}