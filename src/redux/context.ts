import React, { useContext } from 'react'

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  count: 1,
  init: 'Go to work',
  dispatch: (action: { type: string; paylod?: any }) => {
    return action
  },
})

export const useRedux = () => useContext(Store)

export default Store
