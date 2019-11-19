import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useIsLogin } from '@/redux/context'

export default function useAuthLogin(needLogin = true) {
	const isLogin = useIsLogin()
	const history = useHistory()
	console.log('11111111111111')
	if (!isLogin && needLogin) {
		history.replace('/')
	}
}