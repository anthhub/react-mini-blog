export default function reducer(state: any, action: any) {
	const { payload } = action
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: reducer -> action', action)
	switch (action.type) {
		case 'LOGIN':
			return { ...state, ...payload }

		case 'CHANGE_ARTICLE_LIST':
			return { ...state, ...payload }

		case 'DELETE_ARTICLE':
			return { ...state, articleList: state.articleList.filter((item: any) => item.id !== payload.id) }

		case 'UPDATE_ARTICLE':
			return {
				...state,
				articleList: (state.articleList.filter((item: any) => item.id === payload.id).screenshot =
					payload.screenshot)
			}

		case 'UPDATE_USER':
			return { ...state, user: { ...state.user, ...payload.user } }

		case 'LOGOUT':
			return { ...state, user: {} }
		default:
			return state
	}
}
