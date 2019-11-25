import React, { useContext } from 'react'
// import { UserDto } from './../modal/dtos/user.dto'

// Store Context is the global context that is managed by reducers.

interface IStore {
	user: any
	query: {
		search: string
		sort: string
	}
	articleList: any[]
	dispatch(action: { type: string; payload?: any }): void
}

const Store = React.createContext<IStore>({
	user: {},
	query: { search: '', sort: '' },
	articleList: [],
	dispatch: (arg) => arg
})

export const useRedux = () => useContext(Store)

export const useDispatch = () => {
	const dispatch = useContext(Store).dispatch
	return dispatch
}

export const useSelector = <T>(cb: (store: IStore) => T | IStore = (arg) => arg) => cb(useContext(Store))

export const useIsLogin = () => {
	const store = useRedux()
	return !!Object.keys(store.user).length
}
export default Store
