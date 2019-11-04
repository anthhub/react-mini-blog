// import { connect } from 'react-redux';
// import { Button, Input } from 'antd';
import useFlag from '@/hooks/useFlag';
import { useIsLogin, useSelector } from '@/redux/context';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import { Wrapper } from './style';

// 登录状态 true
// 退出状态 false
// const loginStatus = true
// const loginStatus: boolean = false;

const Header: React.FC = (props) => {
	// 是否显示 Login 组件
	const { flag, setFalse, setTrue } = useFlag(false);
	const [ showDropdown, setDropdown ] = useState(false);

	const isLogin = useIsLogin();

	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: isLogin', isLogin, useSelector((l) => l));

	const hideDropdown = useCallback((e: any) => {
		console.log(e, { showDropdown });
		setDropdown(false);
	}, []);

	useEffect(() => {
		document.addEventListener('click', hideDropdown);
		return () => {
			document.removeEventListener('click', hideDropdown);
		};
	}, []);

	return (
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
									alt="search"
									className="search-icon"
									src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
								/>
							</form>
						</li>
						<li className="nav-item write">
							<Link to="/editor">
								<button className="write-btn">写文章</button>
							</Link>
						</li>
						{isLogin ? (
							<li className="nav-item menu">
								<div
									className="avatar"
									onClick={(e) => {
										e.nativeEvent.stopImmediatePropagation();
										setDropdown(true);
									}}
								/>
								{showDropdown && (
									<ul className="dropdown-list">
										<li>
											<a className="menu-item" href="/settings">
												<i className='setting-icon icon'/>
												<span>设置</span>
											</a>
										</li>
										<li>
											<a className="menu-item">
												<i className='logout-icon icon'/>
												<span>登出</span>
											</a>
										</li>
									</ul>
								)}
							</li>
						) : (
							<li className="nav-item login-area">
								<span className="login" onClick={setTrue}>
									登录
								</span>
								<span className="register" onClick={setTrue}>
									注册
								</span>
							</li>
						)}
					</ul>
				</nav>
			</header>
			{flag && !isLogin && <Login onClose={setFalse} />}
		</Wrapper>
	);
};

export default Header;
