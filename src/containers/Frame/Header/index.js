import React from 'react';
// import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { Wrapper } from './style';

const Header = (props) => {
	return (
		// 把传入的 theme 作为类名，若无传入的属性，类名为空
		<Wrapper>
			<header className="header">
				<a className="logo-link">
					<div className="logo" />
				</a>
				<nav>
					<ul className="nav">
						<li className="">
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
						</li>
						<li className="nav-item search">
							<Input style={{ width: 156, height: 32 }} />
						</li>
						<li className="nav-item write">
							<Button type="primary">写文章</Button>
						</li>
						<li className="nav-item menu">
							<div className="avatar" />
						</li>
					</ul>
				</nav>
			</header>
		</Wrapper>
	);
};

export default Header;
