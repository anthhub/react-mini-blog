// 右侧 下载客户端小卡片

import { signIn } from '@/Api/account'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { useDispatch } from '@/redux/context'
import React, { useCallback } from 'react'
import { Wrapper } from './style'

interface IProps {
  onClose(e: any): void
  onSwitch(e: any): void
}

const Login: React.FC<IProps> = ({ onClose, onSwitch }) => {
  const { value: phoneNumber, onInputEvent: onChangeNumber } = useInputEvent('')
  const { value: password, onInputEvent: onChangePassword } = useInputEvent('')

  const dispatch = useDispatch()

  const onLogin = useCallback(() => {
    signIn({ mobilePhoneNumber: phoneNumber, password }).then(data => {
      console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onLogin -> data', data)
      dispatch({ type: 'LOGIN', payload: { user: { ...data, access_token: 'Bearer ' + data.access_token } } })
      onClose(data)
    })
  }, [phoneNumber, password])

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

// // 请求路径
// var httpurl = '/api2/ddgl/login'
// // 数据请求
// function myClick() {
// 	var usernamestr = document.getElementById('username').value
// 	var passwordstr = document.getElementById('password').value
// 	if (usernamestr == '' || usernamestr == null) {
// 		alert('用户名为空')
// 		return
// 	}
// 	if (passwordstr == '' || passwordstr == null) {
// 		alert('密码为空')
// 		return
// 	}

// 	$.ajax({
// 		url: httpurl, //请求的url地址
// 		type: 'post', //设置请求的http方式，method也可以
// 		dataType: 'json', //将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
// 		data: {
// 			//向服务器端发送的数据
// 			username: usernamestr,
// 			password: passwordstr,
// 			uniqueDeviceIdentifier: 2
// 		},
// 		success: function(data, textStatus, jqXHR) {
// 			//请求成功之后执行的回调函数
// 			if (data.resultCode != 200) {
// 				alert('用户名或密码错误')
// 				return
// 			}
// 			var token = data.extras.token
// 			console.log(token)
// 			location.href = 'Listview1.html?' + 'token=' + token + '&&' + usernamestr
// 		},
// 		error: function(jqXHR, textStatus, errorThrown) {
// 			//请求失败之后执行的回调函数
// 			console.log(errorThrown)
// 		}
// 	})
// }
