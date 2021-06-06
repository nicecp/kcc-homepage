import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import { getThemeCache } from '../utils/theme'

import application from './application/reducer'

type MergedState = {
  application: {
    [key: string]: any
  }
}
const PERSISTED_KEYS: string[] = ['application']
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState

if (loadedState.application) {
  loadedState.application = { ...loadedState.application, darkMode: getThemeCache() }
}

const store = configureStore({
  reducer: {
    application,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS, debounce: 500 })],
  preloadedState: loadedState,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
