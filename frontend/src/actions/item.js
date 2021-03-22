import { types } from '../types/types'
import { fetchUrl } from '../helpers/fetch'

export const itemStartLoading = (itemId) => {
  return async (dispatch) => {
    try {
      const resp = await fetchUrl(`items/${itemId}`, {}, 'GET')
      const body = await resp.json()
      dispatch(itemLoaded(body))
    } catch (error) {
      console.log(error)
    }
  }
}

export const searchStartLoading = (search) => {
  return async (dispatch) => {
    try {
      const resp = await fetchUrl(`items/${search}`, {}, 'GET')
      const body = await resp.json()
      dispatch(searchLoaded(body))
    } catch (error) {
      console.log(error)
    }
  }
}

const searchLoaded = (items) => {
  if (items) {
    return { type: types.searchLoaded, payload: items }
  }
  return { type: types.noSearchLoaded, payload: [] }
}

const itemLoaded = (item) => {
  if (item) {
    return { type: types.itemLoaded, payload: item }
  }
  return { type: types.noItem, payload: [] }
}