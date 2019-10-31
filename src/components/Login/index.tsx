// 右侧 下载客户端小卡片

import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

const Login: React.FC = (props) => {
	return (
		<Wrapper>
			<form className="login-box">
				<i className="close-btn" />
				<div className="input-panel">
					<h1 className="title">注册</h1>
					<div className="input-group">
						<input className="input" placeholder="请输入邮箱" />
						<input type="password" className="input" placeholder="请输入密码（不少于 6 位）" />
					</div>
					<button className="commit-btn">注册</button>
					<div className="switch">已有账号登录</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default Login;
