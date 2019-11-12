// 右侧 下载客户端小卡片

import { signUp } from '@/Api/account'
import useFetch from '@/hooks/useFetch'
import useInputEvent from '@/hooks/useInputEvent'
import { useDispatch } from '@/redux/context'
import React, { useCallback } from 'react'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

interface IProps {
  onClose(e: any): void
  onSwitch(e: any): void
}

const Register: React.FC<IProps> = ({ onClose, onSwitch }) => {
  const { value: username, onInputEvent: onChangeUsername } = useInputEvent('')
  const { value: phoneNumber, onInputEvent: onChangeNumber } = useInputEvent('')
  const { value: password, onInputEvent: onChangePassword } = useInputEvent('')

  const onRegister = useCallback(() => {
    signUp({ mobilePhoneNumber: phoneNumber, password, username }).then(data => {
      onClose(data)
      onSwitch(data)
    })
  }, [phoneNumber, password, username])

  return (
    <Wrapper>
      <form className="login-box">
        <i className="close-btn" onClick={onClose} />
        <div className="input-panel">
          <h1 className="title">注册</h1>
          <div className="input-group">
            <input className="input" placeholder="请输入用户名" value={username} onChange={onChangeUsername} />
            <input className="input" placeholder="请输入手机号" value={phoneNumber} onChange={onChangeNumber} />
            <input type="password" className="input" placeholder="请输入密码（不少于 6 位）" value={password} onChange={onChangePassword} />
          </div>
          <button type="button" className="commit-btn" onClick={onRegister}>
            注册
          </button>
          <div
            className="switch"
            onClick={e => {
              onClose(e)
              onSwitch(e)
            }}
          >
            已有账号登录
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Register
