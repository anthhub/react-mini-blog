import React, { useReducer, useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import Store from './store/context'
import reducer from './store/reducer'
import { usePersistedContext, usePersistedReducer } from '@hooks/usePersist'

const Test: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React xxxx
        </a>
      </header>
    </div>
  )
}

const App: React.FC = () => {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), 'state')

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state', // The localStorage key
  )

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Test />
    </Store.Provider>
  )
}

export default App
