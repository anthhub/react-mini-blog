import axios from 'axios'
import { useEffect } from 'react'
export function usePersistedContext<T>(context: T, key = 'state', flag = true): T {
  // if (!flag) {
  //   return context
  // }

  const persistedContext = JSON.parse(localStorage.getItem(key) || '') || {}

  axios.defaults.headers.common.Authorization = persistedContext!.user && persistedContext.user.access_token
  console.log(
    '%c%s',
    'color: #20bd08;font-size:15px',
    '===TQY===: usePersistedContext -> persistedContext.user && persistedContext.user.access_token',
    persistedContext.user && persistedContext.user.access_token
  )

  return persistedContext ? persistedContext : context
}

export function usePersistedReducer([state, dispatch]: any[], key = 'state', flag = true) {
  useEffect(() => {
    axios.defaults.headers.common.Authorization = state.user && state.user.access_token
    console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: usePersistedReducer -> state.user && state.user.access_token', state.user && state.user.access_token)

    if (!flag) {
      return
    }
    return localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, dispatch]
}
