// 右侧 下载客户端小卡片

import useInputEvent from '@/hooks/useInputEvent'
import { useDispatch } from '@/redux/context'
import React from 'react'
import { Wrapper } from './style'

interface IProps {
	onClose(e: any): void
	onSwitch(e: any): void
}

const Login: React.FC<IProps> = ({ onClose, onSwitch }) => {
	const { value: phonrNumber, onInputEvent: onChangenumber } = useInputEvent('')
	const { value: password, onInputEvent: onChangePassword } = useInputEvent('')

	const dispatch = useDispatch()

	const onLogin = () => {
		dispatch({ type: 'LOGIN', payload: { user: { phonrNumber, password } } })
	}

	return (
		<Wrapper>
			<form className="login-box">
				<i className="close-btn" onClick={onClose} />
				<div className="input-panel">
					<h1 className="title">登录</h1>
					<div className="input-group">
						<input className="input" placeholder="请输入手机号" value={phonrNumber} onChange={onChangenumber} />
						<input
							type="password"
							className="input"
							placeholder="请输入密码（不少于 6 位）"
							value={password}
							onChange={onChangePassword}
						/>
					</div>
					<button className="commit-btn" onClick={onLogin}>
						登录
					</button>
					<div
						className="switch"
						onClick={(e) => {
							onClose(e)
							onSwitch(e)
						}}
					>
						没有账号？注册
					</div>
				</div>
			</form>
		</Wrapper>
	)
}

export default Login
