import useFlag from '@/hooks/useFlag'
import { useIsLogin, useSelector, useDispatch } from '@/redux/context'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import { Wrapper } from './style'

const Header: React.FC = (props) => {
	// 搜索框聚焦
	const [ active, setActive ] = useState(false)

	// 是否显示 Login 组件
	const { flag, setFalse, setTrue } = useFlag(false)

	// 是否显示 Register 组件
	const { flag: flag2, setFalse: setFalse2, setTrue: setTrue2 } = useFlag(false)

	// 是否显示下拉菜单
	const [ showDropdown, setDropdown ] = useState(false)

	const hideDropdown = useCallback((e: any) => {
		console.log(e, { showDropdown })
		setDropdown(false)
	}, [])

	useEffect(() => {
		document.addEventListener('click', hideDropdown)
		return () => {
			document.removeEventListener('click', hideDropdown)
		}
	}, [])

	// 是否登陆
	const isLogin = useIsLogin()

	console.log('%c%s', 'color: #20bd08; font-size:15px', '===TQY===: isLogin', isLogin, useSelector((l: any) => l))

	// 登出确定框
	const dispatch = useDispatch()

	const confirmLogout = () => {
		if (window.confirm('确定登出吗？每一片贫瘠的土地都需要坚定的挖掘者！')) {
			dispatch({ type: 'LOGOUT' })
		}
	}

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
							<form className={active ? 'search-form active' : 'search-form'}>
								{/* <Input style={{ width: 156, height: 32 }} /> */}
								<input
									className="search-input"
									placeholder="搜索"
									onFocus={() => setActive(true)}
									onBlur={() => {
										setActive(false)
									}}
								/>
								<img
									alt="search"
									className="search-icon"
									src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
								/>
							</form>
						</li>
						<li className="nav-item write">
							{isLogin ? (
								<Link to="/editor">
									<button className="write-btn">写文章</button>
								</Link>
							) : (
								// 没登陆时 点击写文章按钮弹出登陆面板
								<button className="write-btn" onClick={setTrue}>
									写文章
								</button>
							)}
						</li>
						{isLogin ? (
							<li className="nav-item menu">
								<div
									className="avatar"
									onClick={(e) => {
										e.nativeEvent.stopImmediatePropagation()
										setDropdown(true)
									}}
								/>
								{showDropdown && (
									<ul className="dropdown-list">
										<li>
											<a className="menu-item" href="/settings">
												<i className="setting-icon icon" />
												<span>设置</span>
											</a>
										</li>
										<li>
											<a className="menu-item" onClick={confirmLogout}>
												<i className="logout-icon icon" />
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
								<span className="register" onClick={setTrue2}>
									注册
								</span>
							</li>
						)}
					</ul>
				</nav>
			</header>
			{flag && !isLogin && <Login onClose={setFalse} onSwitch={setTrue2} />}
			{flag2 && !isLogin && <Register onClose={setFalse2} onSwitch={setTrue} />}
		</Wrapper>
	)
}

export default Header
