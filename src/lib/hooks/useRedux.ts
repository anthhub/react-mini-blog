import { useEffect } from 'react'

export function usePersistedContext(context: any, key = 'state', flag = true) {
  if (!flag) {
    return context
  }

  const persistedContext = localStorage.getItem(key)
  return persistedContext ? JSON.parse(persistedContext) : context
}

export function usePersistedReducer([state, dispatch]: any[], key = 'state', flag = true) {
  useEffect(() => {
    if (!flag) {
      return
    }
    return localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, dispatch]
}
