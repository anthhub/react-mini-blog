import React from 'react'
import logo from '../../logo.svg'
import './App.css'

import { useRedux } from '@/redux/context'
import { Button } from 'antd'

const Test: React.FC = () => {
  const { init, dispatch, count } = useRedux()
  console.log('%c%s', 'color: #f2ceb6', init, dispatch, count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {init} -- {count}
        </a>
        <Button type="danger" onClick={() => dispatch({ type: 'ADD' })}>
          +
        </Button>
        <Button type="danger" onClick={() => dispatch({ type: 'SUB' })}>
          -
        </Button>
      </header>
    </div>
  )
}

export default Test
