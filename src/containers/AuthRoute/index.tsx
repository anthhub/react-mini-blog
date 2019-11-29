import React from 'react'
import { useHistory, Redirect } from 'react-router'
import { useIsLogin } from '@/redux/context'

interface IProps {
	children?: any
	needLogin?: boolean
}

const AuthRoute: React.FC<IProps> = ({ children, needLogin = false }) => {
	const history = useHistory()
	const isLogin = useIsLogin()
	// console.log({ needLogin })

	if (needLogin && !isLogin) {
		return <Redirect to={'/'} />
	}

	return children
}

export default AuthRoute
