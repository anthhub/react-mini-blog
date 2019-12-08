import axios from 'axios'
import { useEffect } from 'react'

import { defaultStore } from '@/redux/context'

export function usePersistedContext<T>(context: T, key = 'state', flag = true): T {
  // if (!flag) {
  //   return context
  // }

  const persistedContext = JSON.parse(localStorage.getItem(key) || 'null') || defaultStore

  axios.defaults.headers.common.Authorization = persistedContext!.user && persistedContext.user.access_token

  return persistedContext ? persistedContext : context
}

export function usePersistedReducer([state, dispatch]: any[], key = 'state', flag = true) {
  useEffect(() => {
    axios.defaults.headers.common.Authorization = state.user && state.user.access_token

    // if (!flag) {
    //   return
    // }
    const tmp = state || {}

    const newState = Object.keys(tmp).reduce((res, cur) => {
      if (Array.isArray(tmp[cur])) {
        // 避免数组过大
        res[cur] = tmp[cur].slice(0, 20)
      }
      res[cur] = tmp[cur]
      return res
    }, {} as any)

    return localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, dispatch]
}
