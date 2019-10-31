// import { connect } from 'react-redux';
// import { Button, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';
import Login from '../Login';

// 登录和退出时导航栏右侧有差异
// const loginStatus: boolean = true;
const loginStatus: boolean = false;

const Header: React.FC = (props) => {
	return (
		// 把传入的 theme 作为类名，若无传入的属性，类名为空
		<Wrapper>
			<header className="header">
				<Link className="logo-link" to="/home">
					<div className="logo" />
				</Link>
				<nav>
					<ul className="nav">
						{/* <li className="">
							<ul className="nav-list">
								<a href="/home">
									<li className="active nav-item">首页</li>
								</a>
								<a>
									<li className="nav-item">沸点</li>
								</a>
								<a>
									<li className="nav-item">话题</li>
								</a>
								<a>
									<li className="nav-item">小册</li>
								</a>
								<a>
									<li className="nav-item">活动</li>
								</a>
							</ul>
						</li> */}
						<li className="nav-item search">
							<form className="search-form">
								{/* <Input style={{ width: 156, height: 32 }} /> */}
								<input className="search-input" placeholder="搜索" />
								<img
									className="search-icon"
									src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
								/>
							</form>
						</li>
						<li className="nav-item write">
							<button className="write-btn">写文章</button>
						</li>
						{loginStatus ? (
							<li className="nav-item menu">
								<div className="avatar" />
							</li>
						) : (
							<li className="nav-item login-part">
								<span className="login">登录</span>
								<span className="register">注册</span>
							</li>
						)}
					</ul>
				</nav>
			</header>
			<Login />
		</Wrapper>
	);
};

export default Header;
