import { usePersistedContext, usePersistedReducer } from '@/hooks/usePersist'
import React, { useContext, useReducer } from 'react'

import Store from './redux/context'
import reducer from './redux/reducer'

import '@/styles/index.less'
import AppRouter from './routes'
import { GlobalStyle } from './style'

const App: React.FC = () => {
  const globalStore = usePersistedContext(useContext(Store), 'state', false)

  const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore), 'state')

  return (
    <Store.Provider value={{ ...state, dispatch }}>
      <GlobalStyle />
      <AppRouter />
    </Store.Provider>
  )
}

export default App
