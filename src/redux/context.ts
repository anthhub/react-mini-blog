import React, { useContext } from 'react'
import { UserDto } from './../modal/dtos/user.dto'

// Store Context is the global context that is managed by reducers.

interface IStore {
  count: number
  // user:  { email, password }      UserDto | null

  user: { email: string; password: string } | null

  dispatch(action: { type: string; payload?: any }): void
}

const Store = React.createContext<IStore>({
  count: 1,
  user: null,
  dispatch: arg => arg,
})

export const useRedux = () => useContext(Store)

export const useDispatch = () => {
  const dispatch = useContext(Store).dispatch
  return dispatch
}

export const useSelector = <T>(cb: (store: IStore) => T | IStore = arg => arg) => cb(useContext(Store))

export const useIsLogin = () => !!useContext(Store).user

export default Store
