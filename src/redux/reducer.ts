export default function reducer(state: any, action: any) {
  const { payload } = action
  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: reducer -> action', action)
  switch (action.type) {
    case 'CHANGE_SHOW_LOGIN':
      return { ...state, ...payload }

    case 'LOGIN':
      return { ...state, ...payload }

    case 'CHANGE_ARTICLE_LIST':
      return { ...state, ...payload }

    case 'APPEND_ARTICLE_LIST':
      return { ...state, articleList: [...state.articleList, ...payload.articleList] }

    case 'DELETE_ARTICLE':
      return { ...state, articleList: state.articleList.filter((item: any) => item.id !== payload.id) }

    case 'UPDATE_ARTICLE':
      return {
        ...state,
        articleList: state.articleList.filter((item: any) => item.id === payload.id).screenshot = payload.screenshot,
      }

    case 'CHANGE_LIKE_LIST':
      return { ...state, ...payload }

    case 'CHANG_FOLLOWING_LIST':
      return { ...state, ...payload }

    case 'CHANGE_FOLLOWERS_LIST':
      return { ...state, ...payload }

    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...payload.user } }

    case 'UPDATE_CHECK_USER':
      return { ...state, checkUser: { ...state.checkUser, ...payload.checkUser } }

    case 'LOGOUT':
      return { ...state, user: {} }
    default:
      return state
  }
}
