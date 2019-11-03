// 右侧 下载客户端小卡片

import useInputEvent from '@/hooks/useInputEvent'
import { useDispatch } from '@/redux/context'
import React from 'react'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

interface IProps {
  onClose(e: any): void
}

const Login: React.FC<IProps> = ({ onClose }) => {
  const { value: email, onInputEvent: onChangeEmail } = useInputEvent('')
  const { value: password, onInputEvent: onChangePassword } = useInputEvent('')

  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch({ type: 'LOGIN', payload: { user: { email, password } } })
  }

  return (
    <Wrapper>
      <form className="login-box">
        <i className="close-btn" onClick={onClose} />
        <div className="input-panel">
          <h1 className="title">注册</h1>
          <div className="input-group">
            <input className="input" placeholder="请输入邮箱" value={email} onChange={onChangeEmail} />
            <input type="password" className="input" placeholder="请输入密码（不少于 6 位）" value={password} onChange={onChangePassword} />
          </div>
          <button className="commit-btn">注册</button>
          <div className="switch" onClick={onLogin}>
            已有账号登录
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Login
