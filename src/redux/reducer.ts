export default function reducer(state: any, action: any) {
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: reducer -> action', action);
	switch (action.type) {
		case 'ADD':
			return { ...state, count: state.count + 1 };

		case 'SUB':
			return { ...state, count: state.count - 1 };

		case 'LOGIN':
			return { ...state, ...action.payload };

		case 'LOGOUT':
			return { ...state, user: null };
		default:
			return state;
	}
}
