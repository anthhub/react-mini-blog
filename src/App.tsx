import React, { useContext, useReducer } from 'react'

import Frame from '@/containers/Frame'
import { usePersistedContext, usePersistedReducer } from '@/hooks/usePersist'
import '@/styles/index.less'
import Store from './redux/context'
import reducer from './redux/reducer'
import AppRouter from './routes'

const App: React.FC = () => {
  const globalStore = usePersistedContext(useContext(Store), 'state', false)

  const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore), 'state')

  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: App:React.FC -> state', state)
  return (
    <Store.Provider value={{ ...state, dispatch }}>
      {/* <Frame /> */}
      <AppRouter />
    </Store.Provider>
  )
}

export default App
