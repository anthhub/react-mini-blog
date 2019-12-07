// 右侧 下载客户端小卡片

import { signIn } from '@/Api/account'
import { useDispatch } from '@/redux/context'
import React, { useCallback, useEffect } from 'react'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { message } from 'antd'

import { Wrapper } from './style'

interface IProps {
  onClose(e: any): void
  onSwitch(e: any): void
}

// 全局生效（显示时长3s，最多显示1条）
message.config({
  duration: 3,
  maxCount: 1,
})

const Login: React.FC<IProps> = ({ onClose, onSwitch }) => {
  const { value: phoneNumber, onInputEvent: onChangeNumber } = useInputEvent('')
  const { value: password, onInputEvent: onChangePassword } = useInputEvent('')

  const dispatch = useDispatch()

  const onLogin = useCallback(() => {
    // 简单校验输入手机和密码后再发送请求
    if (phoneNumber.length === 0) {
      message.warning('请填写手机号')
    } else if (password.length === 0) {
      message.warning('请输入密码')
    } else if (password.length < 6 || password.length > 12) {
      message.warning('密码错误')
    } else if (phoneNumber.length !== 11) {
      message.warning('请输入正确的手机号')
    } else {
      signIn({ mobilePhoneNumber: phoneNumber, password }).then(data => {
        console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onLogin -> data', data)
        dispatch({
          type: 'LOGIN',
          payload: { user: { ...data, access_token: 'Bearer ' + data.access_token } },
        })
        onClose(data)
      })
    }
  }, [phoneNumber, password])

  // 监听回车事件
  // const login = useCallback((event: any) => {
  // 	let e = event || window.event
  // 	if (e && e.keyCode === 13) {
  // 		console.log('login', phoneNumber)
  // 		onLogin()
  // 	}
  // }, [phoneNumber, password])

  // useEffect(() => {
  // 	document.addEventListener('keydown', login)
  // 	return () => document.removeEventListener('keydown', login)
  // }, [])

  return (
    <Wrapper>
      <form className="login-box">
        <i className="close-btn" onClick={onClose} />
        <div className="input-panel">
          <h1 className="title">登录</h1>
          <div className="input-group">
            <input className="input" placeholder="请输入手机号" value={phoneNumber} onChange={onChangeNumber} />
            <input type="password" className="input" placeholder="请输入密码（不少于 6 位）" value={password} onChange={onChangePassword} />
          </div>
          <button type="button" className="commit-btn" onClick={onLogin}>
            登录
          </button>
          <div
            className="switch"
            onClick={e => {
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
