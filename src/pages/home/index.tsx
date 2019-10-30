// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import { getHome } from '@/Api/getHomeData';

// class Home extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			top: 60,
// 			tags: [],
// 			goodAuthor: [],
// 			recommendBooks: [],
// 			linkList: []
// 		};
// 	}

// 	componentDidMount() {
// 		getHome()
// 			.then((res) => {
// 				this.setState({
// 					tags: res.tags,
// 					goodAuthor: res.goodAuthor,
// 					recommendBooks: res.recommendBooks,
// 					linkList: res.linkList
// 				});
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}

// 	render() {
// 		return <div />;
// 	}
// }

// export default Home;


// 首页
import React from 'react';
// import { connect } from 'react-redux';
import ArticleList from './ArticleList';
import AppDownload from '../../components/AppDownload';
import { Wrapper } from './style';
import { BackTop } from 'antd';

// const Home = (props) => {
const Home: React.FC = (props) => {
	return (
		<Wrapper>
			<ArticleList/>
			<AppDownload/>
			<BackTop />
		</Wrapper>
	);
};

export default Home;

/* 
待办：

改回到顶部按钮的样式
模拟数据后端

*/