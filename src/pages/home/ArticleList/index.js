import React from 'react';
// import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import Article from './Article';
import { Wrapper } from './style';

const ArticleList = (props) => {
	return (
		<Wrapper>
			<header className="header">
				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item active">
							<a>热门</a>
						</li>
						<li className="nav-item">
							<a>最新</a>
						</li>
						<li className="nav-item">
							<a>热榜</a>
						</li>
					</ul>
				</nav>
			</header>

			<ul>
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
			</ul>
		</Wrapper>
	);
};

export default ArticleList;
