export default function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 }
    case 'SUB':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
